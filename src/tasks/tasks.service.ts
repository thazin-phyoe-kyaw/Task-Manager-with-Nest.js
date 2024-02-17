import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/task.dto';
import { FilterTaskDTO } from './dto/fitlerTask.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getTasks(): Task[] {
    return this.tasks;
  }
  getFilterTask(filterDto: FilterTaskDTO): Task[] {
    const { status, searchTerm } = filterDto;
    let tasks = this.getTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (searchTerm) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(searchTerm) ||
          task.description.includes(searchTerm),
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const foundId = this.tasks.find((task) => task.id === id);
    if (!foundId) {
      throw new NotFoundException();
      // throw new NotFoundException("Task id not founds");
    }
    return foundId;
  }

  createTask(createTaskDto: CreateTaskDTO) {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string) {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
    return true;
  }
  updateTask(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}

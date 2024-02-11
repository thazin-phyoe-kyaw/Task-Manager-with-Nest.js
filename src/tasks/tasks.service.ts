import { Injectable } from '@nestjs/common';
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
    let tasks = this.getTasks(); // Get the tasks
    console.log(tasks, 'FFF');
    // Filter tasks based on status if status is provided
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    // Filter tasks based on searchTerm if searchTerm is provided
    if (searchTerm) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(searchTerm) ||
          task.description.includes(searchTerm),
      );
    }
    console.log(tasks, 'H');
    return tasks; // Return the filtered tasks
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  // createTask(title: string, description: string)
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
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return true; // Indicate success, or you could return some feedback message
  }
  updateTask(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}

import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getTasks(): Task[] {
    return this.tasks;
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

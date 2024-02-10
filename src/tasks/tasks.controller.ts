import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
  @Patch(':id/status')
  updateTask(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.tasksService.updateTask(id, status);
  }
  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}

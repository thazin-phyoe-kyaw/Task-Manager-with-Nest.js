import { PipeTransform } from '@nestjs/common';

export class TaskStatusValidator implements PipeTransform {
  transform(value: any) {
    return value;
  }
}

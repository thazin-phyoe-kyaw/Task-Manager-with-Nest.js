// import { Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';

// @Module({
//   controllers: [],
//   providers: [],
//   imports: [TasksModule],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TasksModule],
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     password: 'postgres',
  //     username: 'postgres',
  //     entities: [],
  //     database: 'pgWithNest',
  //     synchronize: true,
  //     logging: true,
  //   }),
  //   TasksModule,
  // ],
  controllers: [],
  providers: [],
})
export class AppModule {}

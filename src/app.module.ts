import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'gaselo',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true
    })
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

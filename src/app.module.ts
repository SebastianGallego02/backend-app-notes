import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'gaselo',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true
    }),
    TasksModule,
    CategoriesModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

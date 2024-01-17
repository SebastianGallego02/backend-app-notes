import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Category } from 'src/categories/entities/category.entity';


@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ){


  }

  async create(createTaskDto: CreateTaskDto) {
    const category = await this.categoryRepository.findOneBy({name: createTaskDto.category});

    if(!category){
      throw new BadRequestException('Category not found');
    }
    //const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save({
      ...createTaskDto,
      category,
    });
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    //return await this.taskRepository.softRemove({id}); instance
    return await this.taskRepository.softDelete({id}); //the id 
  }
}

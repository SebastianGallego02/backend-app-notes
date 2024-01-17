import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Category {

  @Column({primary: true, generated: true})
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Task, (task)=>task.category)
  tasks: Task[];
}

import { Category } from "src/categories/entities/category.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Task {
  //@PrimaryGeneratedColumn()
  @Column({primary: true, generated: true})
  id: number;

  @Column()
  description: string;

  @Column({default: true})
  active: boolean;

  @Column({default: false})
  archived: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(()=> Category, (category)=>category.id, {
    eager: true, 
  })
  category: Category;
}
  
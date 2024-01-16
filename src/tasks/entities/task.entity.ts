import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Task {
  //@PrimaryGeneratedColumn()
  @Column({primary: true, generated: true})
  id: number;
  @Column()
  description: string;
  @Column()
  category: number;
  @Column()
  active: boolean;
  @Column()
  archived: boolean;
  @DeleteDateColumn()
  deletedAt: Date;
}
  
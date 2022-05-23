import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
@Entity('Links')
export class Links {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.links, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @Column('varchar', {
    name: 'linkedin',
  })
  linkedin: string;
}

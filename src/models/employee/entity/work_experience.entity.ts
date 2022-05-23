import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
@Entity('Work_experience')
export class Work_experience {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.workexperience, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @Column('varchar', {
    name: 'type',
  })
  type: string;

  @Column('int', {
    name: 'id_type',
  })
  id_type: number;

  @Column('int', {
    name: 'years_worked',
  })
  years_worked: number;

  @Column('varchar', {
    name: 'company_name',
  })
  company_name: string;
}

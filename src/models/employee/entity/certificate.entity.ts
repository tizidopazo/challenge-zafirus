import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
@Entity('Certificate')
export class Certificate {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  //Relacion con employee
  @ManyToOne(() => Employee, (employee) => employee.certificate, {
    onDelete: 'CASCADE',
  })
  employee: Employee;
  @Column('varchar', {
    name: 'title',
  })
  title: string;

  @Column('varchar', {
    name: 'description',
  })
  description: string;
}

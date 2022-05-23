import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Certificate } from './certificate.entity';
import { Links } from './link.entity';
import { Work_experience } from './work_experience.entity';
@Entity('Employee')
export class Employee {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;
  @Column('varchar', {
    name: 'employee_name',
  })
  employee_name: string;

  @Column('varchar', {
    name: 'employee_lastname',
  })
  employee_lastname: string;

  @Column('varchar', {
    name: 'employee_phone',
  })
  employee_phone: string;

  //Relacion con certificate
  @OneToMany(() => Certificate, (certificate) => certificate.employee, {
    cascade: true,
  })
  certificate: Certificate[];

  //Relacion con Work_experience
  @OneToMany(() => Work_experience, (workexperience) => workexperience.employee)
  workexperience: Work_experience[];

  //Relacion con Work_experience
  @OneToMany(() => Links, (links) => links.employee)
  links: Links[];
}

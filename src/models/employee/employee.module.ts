import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Certificate } from './entity/certificate.entity';
import { Employee } from './entity/employee.entity';
import { Links } from './entity/link.entity';
import { Work_experience } from './entity/work_experience.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Certificate, Work_experience, Links]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

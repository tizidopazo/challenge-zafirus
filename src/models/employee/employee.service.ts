import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Employee } from './entity/employee.entity';
import { Certificate } from './entity/certificate.entity';
import { Work_experience } from './entity/work_experience.entity';
import { Links } from './entity/link.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Certificate)
    private certificateRepository: Repository<Certificate>,
    @InjectRepository(Work_experience)
    private workexperienceRepository: Repository<Work_experience>,
    @InjectRepository(Links)
    private linksRepository: Repository<Links>,
  ) {}

  async getAllEmployee() {
    return await this.employeeRepository
      .createQueryBuilder('employee')
      .select()
      .innerJoinAndSelect('employee.certificate', 'certificate')
      .innerJoinAndSelect('employee.workexperience', 'workexperience')
      .innerJoinAndSelect('employee.links', 'links')
      .getMany();
  }

  async getEmployeeWorkedbyid(id_employee) {
    return await this.employeeRepository
      .createQueryBuilder('employee')
      .select()
      .innerJoinAndSelect('employee.workexperience', 'workexperience')
      .where({ id: id_employee })
      .getOne();
  }

  async deleteEmployee(id_employee) {
    try {
      await this.employeeRepository.delete({
        id: id_employee,
      });
      return {
        status: 200,
        msg: 'Employee deleted',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async updateEmployee(body, id_employee) {
    try {
      const EmployeeToUpdate = await this.employeeRepository.findOne({
        where: {
          id: id_employee,
        },
      });
      EmployeeToUpdate.employee_name = body.name;
      EmployeeToUpdate.employee_lastname = body.lastname;
      EmployeeToUpdate.employee_phone = body.phone;
      await this.employeeRepository.save(EmployeeToUpdate);
      return {
        status: 200,
        msg: 'Employee updated.',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async createEmployee(body) {
    const employeeAdd = new Employee();
    employeeAdd.employee_name = body.name;
    employeeAdd.employee_lastname = body.lastname;
    employeeAdd.employee_phone = body.phone;
    try {
      const employeeSaved = await this.employeeRepository.save(employeeAdd);
      const certificateSave = body.certificates.map((elem) => {
        return {
          employee: employeeSaved,
          ...elem,
        };
      });
      const work_experienceSave = body.works.map((elem) => {
        return {
          employee: employeeSaved,
          ...elem,
        };
      });
      const linksSave = body.links.map((elem) => {
        return {
          employee: employeeSaved,
          ...elem,
        };
      });
      await this.certificateRepository.save(certificateSave);
      await this.workexperienceRepository.save(work_experienceSave);
      await this.linksRepository.save(linksSave);
      return {
        status: 200,
        msg: 'Employee saved.',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}

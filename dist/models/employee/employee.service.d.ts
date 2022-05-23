import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './entity/employee.entity';
import { Certificate } from './entity/certificate.entity';
import { Work_experience } from './entity/work_experience.entity';
import { Links } from './entity/link.entity';
export declare class EmployeeService {
    private employeeRepository;
    private certificateRepository;
    private workexperienceRepository;
    private linksRepository;
    constructor(employeeRepository: Repository<Employee>, certificateRepository: Repository<Certificate>, workexperienceRepository: Repository<Work_experience>, linksRepository: Repository<Links>);
    getAllEmployee(): Promise<Employee[]>;
    getEmployeeWorkedbyid(id_employee: any): Promise<Employee>;
    deleteEmployee(id_employee: any): Promise<BadRequestException | {
        status: number;
        msg: string;
    }>;
    updateEmployee(body: any, id_employee: any): Promise<BadRequestException | {
        status: number;
        msg: string;
    }>;
    createEmployee(body: any): Promise<BadRequestException | {
        status: number;
        msg: string;
    }>;
}

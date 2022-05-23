import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployee(): Promise<Employee[]>;
    getEmployeeWorked(params: any): Promise<Employee>;
    deleteEmployee(params: any): Promise<import("@nestjs/common").BadRequestException | {
        status: number;
        msg: string;
    }>;
    createEmployee(body: Employee): Promise<import("@nestjs/common").BadRequestException | {
        status: number;
        msg: string;
    }>;
    updateEmployee(params: any, body: Employee): Promise<import("@nestjs/common").BadRequestException | {
        status: number;
        msg: string;
    }>;
}

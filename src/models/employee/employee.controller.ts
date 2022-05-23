import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get('getAll')
  async getAllEmployee() {
    return await this.employeeService.getAllEmployee();
  }

  @Get('getEmployeeWorked/:id')
  async getEmployeeWorked(@Param() params) {
    return this.employeeService.getEmployeeWorkedbyid(params.id);
  }

  @Delete('deleteEmployee/:id')
  async deleteEmployee(@Param() params) {
    return this.employeeService.deleteEmployee(params.id);
  }

  @Post('createEmployee')
  async createEmployee(@Body() body: Employee) {
    return await this.employeeService.createEmployee(body);
  }

  @Put('updateEmployee/:id')
  async updateEmployee(@Param() params, @Body() body: Employee) {
    return await this.employeeService.updateEmployee(body, params.id);
  }
}

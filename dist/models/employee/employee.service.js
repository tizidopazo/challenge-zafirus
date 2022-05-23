"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./entity/employee.entity");
const certificate_entity_1 = require("./entity/certificate.entity");
const work_experience_entity_1 = require("./entity/work_experience.entity");
const link_entity_1 = require("./entity/link.entity");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository, certificateRepository, workexperienceRepository, linksRepository) {
        this.employeeRepository = employeeRepository;
        this.certificateRepository = certificateRepository;
        this.workexperienceRepository = workexperienceRepository;
        this.linksRepository = linksRepository;
    }
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
        }
        catch (error) {
            return new common_1.BadRequestException(error);
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
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
    async createEmployee(body) {
        const employeeAdd = new employee_entity_1.Employee();
        employeeAdd.employee_name = body.name;
        employeeAdd.employee_lastname = body.lastname;
        employeeAdd.employee_phone = body.phone;
        try {
            const employeeSaved = await this.employeeRepository.save(employeeAdd);
            const certificateSave = body.certificates.map((elem) => {
                return Object.assign({ employee: employeeSaved }, elem);
            });
            const work_experienceSave = body.works.map((elem) => {
                return Object.assign({ employee: employeeSaved }, elem);
            });
            const linksSave = body.links.map((elem) => {
                return Object.assign({ employee: employeeSaved }, elem);
            });
            await this.certificateRepository.save(certificateSave);
            await this.workexperienceRepository.save(work_experienceSave);
            await this.linksRepository.save(linksSave);
            return {
                status: 200,
                msg: 'Employee saved.',
            };
        }
        catch (error) {
            return new common_1.BadRequestException(error);
        }
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(1, (0, typeorm_1.InjectRepository)(certificate_entity_1.Certificate)),
    __param(2, (0, typeorm_1.InjectRepository)(work_experience_entity_1.Work_experience)),
    __param(3, (0, typeorm_1.InjectRepository)(link_entity_1.Links)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_controller_1 = require("./employee.controller");
const employee_service_1 = require("./employee.service");
const certificate_entity_1 = require("./entity/certificate.entity");
const employee_entity_1 = require("./entity/employee.entity");
const link_entity_1 = require("./entity/link.entity");
const work_experience_entity_1 = require("./entity/work_experience.entity");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([employee_entity_1.Employee, certificate_entity_1.Certificate, work_experience_entity_1.Work_experience, link_entity_1.Links]),
        ],
        controllers: [employee_controller_1.EmployeeController],
        providers: [employee_service_1.EmployeeService],
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map
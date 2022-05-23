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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const certificate_entity_1 = require("./certificate.entity");
const link_entity_1 = require("./link.entity");
const work_experience_entity_1 = require("./work_experience.entity");
let Employee = class Employee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'employee_name',
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'employee_lastname',
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_lastname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'employee_phone',
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_phone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => certificate_entity_1.Certificate, (certificate) => certificate.employee, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Employee.prototype, "certificate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => work_experience_entity_1.Work_experience, (workexperience) => workexperience.employee),
    __metadata("design:type", Array)
], Employee.prototype, "workexperience", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => link_entity_1.Links, (links) => links.employee),
    __metadata("design:type", Array)
], Employee.prototype, "links", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)('employee')
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map
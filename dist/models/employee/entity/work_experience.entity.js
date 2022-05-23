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
exports.Work_experience = void 0;
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./employee.entity");
let Work_experience = class Work_experience {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], Work_experience.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.workexperience, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", employee_entity_1.Employee)
], Work_experience.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'type',
    }),
    __metadata("design:type", String)
], Work_experience.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'id_type',
    }),
    __metadata("design:type", Number)
], Work_experience.prototype, "id_type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'years_worked',
    }),
    __metadata("design:type", Number)
], Work_experience.prototype, "years_worked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'company_name',
    }),
    __metadata("design:type", String)
], Work_experience.prototype, "company_name", void 0);
Work_experience = __decorate([
    (0, typeorm_1.Entity)('work_experience')
], Work_experience);
exports.Work_experience = Work_experience;
//# sourceMappingURL=work_experience.entity.js.map
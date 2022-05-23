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
exports.Certificate = void 0;
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("./employee.entity");
let Certificate = class Certificate {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], Certificate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.certificate, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", employee_entity_1.Employee)
], Certificate.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'title',
    }),
    __metadata("design:type", String)
], Certificate.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'description',
    }),
    __metadata("design:type", String)
], Certificate.prototype, "description", void 0);
Certificate = __decorate([
    (0, typeorm_1.Entity)('certificate')
], Certificate);
exports.Certificate = Certificate;
//# sourceMappingURL=certificate.entity.js.map
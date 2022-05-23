"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./models/employee/entity/employee.entity");
const employee_module_1 = require("./models/employee/employee.module");
const certificate_entity_1 = require("./models/employee/entity/certificate.entity");
const work_experience_entity_1 = require("./models/employee/entity/work_experience.entity");
const link_entity_1 = require("./models/employee/entity/link.entity");
const puerto = process.env.PORT || 3306;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            employee_module_1.EmployeeModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'us-cdbr-east-05.cleardb.net',
                port: puerto,
                username: 'b66d61183d1443',
                password: 'f87e8093',
                database: 'heroku_25dd573371a9de9',
                entities: [employee_entity_1.Employee, certificate_entity_1.Certificate, work_experience_entity_1.Work_experience, link_entity_1.Links],
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './models/employee/entity/employee.entity';
import { EmployeeModule } from './models/employee/employee.module';
import { Certificate } from './models/employee/entity/certificate.entity';
import { Work_experience } from './models/employee/entity/work_experience.entity';
import { Links } from './models/employee/entity/link.entity';

@Module({
  imports: [
    EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secure_pass_here',
      database: 'challenge',
      entities: [Employee, Certificate, Work_experience, Links],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

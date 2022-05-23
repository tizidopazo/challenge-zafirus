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
      host: 'us-cdbr-east-05.cleardb.net',
      username: 'b66d61183d1443',
      port: 3306,
      password: 'f87e8093',
      database: 'heroku_25dd573371a9de9',
      entities: [Employee, Certificate, Work_experience, Links],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

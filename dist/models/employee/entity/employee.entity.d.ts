import { Certificate } from './certificate.entity';
import { Links } from './link.entity';
import { Work_experience } from './work_experience.entity';
export declare class Employee {
    id: number;
    employee_name: string;
    employee_lastname: string;
    employee_phone: string;
    certificate: Certificate[];
    workexperience: Work_experience[];
    links: Links[];
}

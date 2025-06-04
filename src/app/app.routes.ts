import { Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent,
    },
    {
        path: 'addEmployee',
        component: AddEmployeeComponent,
    }
];

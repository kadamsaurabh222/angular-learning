import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [
    {
      id: 1,
      name: 'Saurabh',
      role: 'Frontend Developer',
    },
    {
      id: 2,
      name: 'Rahul',
      role: 'Angular Developer',
    },
    {
      id: 3,
      name: 'Akshay',
      role: 'Fullstack Developer',
    },
  ];
}

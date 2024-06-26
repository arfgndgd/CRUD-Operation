import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl="https://localhost:7108"
  http = inject(HttpClient);
  constructor() { }

  getAllEmployee(){
    return this.http.get<IEmployee[]>(this.apiUrl + "/api/Employee")
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(this.apiUrl + "/api/Employee", employee);
  }

  getEmployee(employeeId: number) {
    return this.http.get<IEmployee>(this.apiUrl + '/api/Employee/' + employeeId);
  }

  updateEmployee(employeeId: number, employee: IEmployee) {
    return this.http.put<IEmployee>(this.apiUrl + '/api/Employee/' + employeeId, employee);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(this.apiUrl + '/api/Employee/' + employeeId);
  }

  login(email: string, password: string) {
    this.http.post<{token: string}>(this.apiUrl + 'api/Auth/login', 
    {
      "email": email,
      "password": password
    })
  }
}

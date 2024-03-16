import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  router = inject(Router);
  employeeList:IEmployee[] = [];
  httpService = inject(HttpService);
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone','age','salary', 'action'];

  ngOnInit(){
    this.httpService.getAllEmployee().subscribe(result => {
      this.employeeList = result;
      console.log(this.employeeList);
    })
  }

  edit(id: number) {
    console.log(id);
    this.router.navigateByUrl("/employee/" + id);
  }
}

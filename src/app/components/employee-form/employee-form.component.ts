import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  httpService = inject(HttpService)
  formBuilder= inject(FormBuilder);
  router = inject(Router);

  employeeForm=this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    phone:['',[Validators.required]],
    age:[,[Validators.required]],
    salary:[,[Validators.required]]
  })

  save() {
    console.log(this.employeeForm.value);
    const employee : IEmployee = {
      firstName : this.employeeForm.value.firstName!,
      lastName : this.employeeForm.value.lastName!,
      email : this.employeeForm.value.email!,
      phone : this.employeeForm.value.phone!,
      age : this.employeeForm.value.age!,
      salary : this.employeeForm.value.salary!
    }
    this.httpService.createEmployee(employee).subscribe(() => {
      this.router.navigateByUrl("/employee-list");
      console.log("success");
    });
  }
}

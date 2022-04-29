import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdateemployeeComponent implements OnInit {

  employeeForm = new FormGroup({
    emp_id : new FormControl('', Validators.required),
    emp_name : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    profession : new FormControl('', Validators.required),
    salary : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateEmployee([this.employeeForm.value.emp_id,
    this.employeeForm.value.emp_name,
    this.employeeForm.value.age,
    this.employeeForm.value.profession,
    this.employeeForm.value.salary
  ])
  .subscribe(employee => {});
  this.employeeForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class AddemployeeComponent implements OnInit {


  employeeForm = new FormGroup({
    emp_id : new FormControl('', Validators.required),
    emp_name : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    profession : new FormControl('', Validators.required),
    salary : new FormControl('', Validators.required)
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addEmployee([this.employeeForm.value.emp_id,
    this.employeeForm.value.emp_name,
    this.employeeForm.value.age,
    this.employeeForm.value.profession,  
    this.employeeForm.value.salary
  ])
  .subscribe(employee => {});
  this.employeeForm.reset();

  }

}

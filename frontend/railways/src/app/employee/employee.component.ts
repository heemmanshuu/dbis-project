import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employee } from '../interfaces/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['../app.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp = new FormGroup({
    emp_id : new FormControl('', Validators.required),
  });
  empl ?: employee;
  constructor(private integrateService : IntegrateService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.integrateService.getEmp(this.emp.value.emp_id)
  .subscribe(tr => {this.empl = tr[0]; console.log(this.empl);});
  // this.tr_id.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delemployee',
  templateUrl: './delemployee.component.html',
  styleUrls: ['../app.component.scss']
})
export class DelemployeeComponent implements OnInit {

  employeeForm = new FormGroup({
    emp_id: new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delEmployee([this.employeeForm.value.emp_id])
  .subscribe(employee => {});
  this.employeeForm.reset();
  }

}

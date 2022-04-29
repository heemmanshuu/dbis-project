import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delcoach',
  templateUrl: './delcoach.component.html',
  styleUrls: ['../app.component.scss']
})
export class DelcoachComponent implements OnInit {

  coachForm = new FormGroup({
    coach_id : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delCoach([this.coachForm.value.coach_id])
  .subscribe(coach => {});
  this.coachForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updatecoach',
  templateUrl: './updatecoach.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdatecoachComponent implements OnInit {

  coachForm = new FormGroup({
    coach_id : new FormControl('', Validators.required),
    total_seats : new FormControl('', Validators.required),
    coach_model : new FormControl('', Validators.required),
    coach_type : new FormControl('', Validators.required),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateCoach([this.coachForm.value.coach_id,
    this.coachForm.value.total_seats,
    this.coachForm.value.coach_model,
    this.coachForm.value.coach_type
  ])
  .subscribe(coach => {});
  this.coachForm.reset();
  }
}


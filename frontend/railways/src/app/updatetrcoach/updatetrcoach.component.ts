import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updatetrcoach',
  templateUrl: './updatetrcoach.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdatetrcoachComponent implements OnInit {

  trcoachForm = new FormGroup({
    coach_id: new FormControl('', Validators.required),
    //st_name : new FormControl('', Validators.required),
   // city : new FormControl('', Validators.required),
    coach_no : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateTrcoach([this.trcoachForm.value.coach_id,
    //this.stationForm.value.st_name,
    //this.stationForm.value.city,
    this.trcoachForm.value.coach_no
  ])
  .subscribe(tr_coach => {});
  this.trcoachForm.reset();
  }
}

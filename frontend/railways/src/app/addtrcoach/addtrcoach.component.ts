import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addtrcoach',
  templateUrl: './addtrcoach.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class AddtrcoachComponent implements OnInit {


  trcoachForm = new FormGroup({
    coach_id : new FormControl('', Validators.required),
    coach_no : new FormControl()
    //st_name : new FormControl('', Validators.required),
    //city : new FormControl('', Validators.required)
   // tr_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addTrcoach([this.trcoachForm.value.coach_id,
    this.trcoachForm.value.coach_no
    //this.stationForm.value.city,
    //this.stationForm.value.platforms  
    //this.stationForm.value.tr_type
  ])
  .subscribe(tr_coach => {});
  this.trcoachForm.reset();

  }

}

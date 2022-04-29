import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addengine',
  templateUrl: './addengine.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class AddengineComponent implements OnInit {


  engineForm = new FormGroup({
    engine_id : new FormControl('', Validators.required),
    engine_type : new FormControl()
    //st_name : new FormControl('', Validators.required),
    //city : new FormControl('', Validators.required)
   // tr_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addEngine([this.engineForm.value.engine_id,
    this.engineForm.value.engine_type
    //this.stationForm.value.city,
    //this.stationForm.value.platforms  
    //this.stationForm.value.tr_type
  ])
  .subscribe(engine => {});
  this.engineForm.reset();

  }

}

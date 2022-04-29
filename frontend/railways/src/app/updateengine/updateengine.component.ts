import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updateengine',
  templateUrl: './updateengine.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdateengineComponent implements OnInit {

  engineForm = new FormGroup({
    engine_id: new FormControl('', Validators.required),
    //st_name : new FormControl('', Validators.required),
   // city : new FormControl('', Validators.required),
    engine_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateEngine([this.engineForm.value.engine_id,
    //this.stationForm.value.st_name,
    //this.stationForm.value.city,
    this.engineForm.value.engine_type
  ])
  .subscribe(engine => {});
  this.engineForm.reset();
  }
}

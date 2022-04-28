import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addstation',
  templateUrl: './addstation.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class AddstationComponent implements OnInit {


  stationForm = new FormGroup({
    st_code : new FormControl('', Validators.required),
    platforms : new FormControl(),
    st_name : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required)
   // tr_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addStation([this.stationForm.value.st_code,
    this.stationForm.value.st_name,
    this.stationForm.value.city,
    this.stationForm.value.platforms  
    //this.stationForm.value.tr_type
  ])
  .subscribe(station => {});
  this.stationForm.reset();

  }

}

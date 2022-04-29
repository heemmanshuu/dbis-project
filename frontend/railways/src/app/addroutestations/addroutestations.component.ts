import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addroutestations',
  templateUrl: './addroutestations.component.html',
  styleUrls: ['../app.component.scss']
  
})
export class AddroutestationsComponent implements OnInit {


  routestationsForm = new FormGroup({
    st_code : new FormControl('', Validators.required),
    time : new FormControl('', Validators.required)
    //st_name : new FormControl('', Validators.required),
    //city : new FormControl('', Validators.required)
   // tr_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addRoutestations([this.routestationsForm.value.st_code,
    this.routestationsForm.value.time
    //this.stationForm.value.city,
    //this.stationForm.value.platforms  
    //this.stationForm.value.tr_type
  ])
  .subscribe(route_stations => {});
  this.routestationsForm.reset();

  }

}

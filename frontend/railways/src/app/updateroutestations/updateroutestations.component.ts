import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updateroutestations',
  templateUrl: './updateroutestations.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdateroutestationsComponent implements OnInit {

  routestationsForm = new FormGroup({
    st_code: new FormControl('', Validators.required),
    //st_name : new FormControl('', Validators.required),
   // city : new FormControl('', Validators.required),
    time : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateRoutestations([this.routestationsForm.value.st_code,
    //this.stationForm.value.st_name,
    //this.stationForm.value.city,
    this.routestationsForm.value.time
  ])
  .subscribe(route_stations => {});
  this.routestationsForm.reset();
  }
}

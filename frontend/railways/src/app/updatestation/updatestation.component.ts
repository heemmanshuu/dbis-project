import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updatestation',
  templateUrl: './updatestation.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdatestationComponent implements OnInit {

  stationForm = new FormGroup({
    st_code: new FormControl('', Validators.required),
    st_name : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    platforms : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateStation([this.stationForm.value.st_code,
    this.stationForm.value.st_name,
    this.stationForm.value.city,
    this.stationForm.value.platforms
  ])
  .subscribe(station => {});
  this.stationForm.reset();
  }
}

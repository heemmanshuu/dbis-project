import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delstation',
  templateUrl: './delstation.component.html',
  styleUrls: ['../app.component.scss']
})
export class DelstationComponent implements OnInit {

  stationForm = new FormGroup({
    st_code : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delStation([this.stationForm.value.st_code])
  .subscribe(station => {});
  this.stationForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delroutestations',
  templateUrl: './delroutestations.component.html',
  styleUrls: ['../app.component.scss']
})
export class DelroutestationsComponent implements OnInit {

  routestationsForm = new FormGroup({
    st_code : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delRoutestations([this.routestationsForm.value.st_code])
  .subscribe(route_stations => {});
  this.routestationsForm.reset();
  }

}

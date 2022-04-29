import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delengine',
  templateUrl: './delengine.component.html',
  styleUrls: ['../app.component.scss']
})
export class DelengineComponent implements OnInit {

  engineForm = new FormGroup({
    engine_id : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delEngine([this.engineForm.value.engine_id])
  .subscribe(engine => {});
  this.engineForm.reset();
  }

}

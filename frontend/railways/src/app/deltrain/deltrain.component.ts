import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deltrain',
  templateUrl: './deltrain.component.html',
  styleUrls: ['../app.component.scss']
})
export class DeltrainComponent implements OnInit {

  tr_id = new FormGroup({
    tr_no : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delTrain([this.tr_id.value.tr_no])
  .subscribe(train => {});
  this.tr_id.reset();
  }

}

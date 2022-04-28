import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deltrain',
  templateUrl: './deltrain.component.html',
  styleUrls: ['../app.component.scss']
})
export class DeltrainComponent implements OnInit {

  constructor(private integrateService : IntegrateService) { }
  tr_id = new FormGroup({
    tr_no : new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delTrain(this.tr_id)
  .subscribe(train => {});
  this.tr_id.reset();
  }

}

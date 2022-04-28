import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['../app.component.scss']
})
export class UpdatetrainComponent implements OnInit {

  trainForm = new FormGroup({
    tr_no : new FormControl('', Validators.required),
    tr_name : new FormControl(),
    start : new FormControl('', Validators.required),
    dest : new FormControl('', Validators.required),
    tr_type : new FormControl(),
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.updateTrain([this.trainForm.value.tr_no,
    this.trainForm.value.tr_name,
    this.trainForm.value.start,
    this.trainForm.value.dest,
    this.trainForm.value.tr_type
  ])
  .subscribe(train => {});
  this.trainForm.reset();
  }
}

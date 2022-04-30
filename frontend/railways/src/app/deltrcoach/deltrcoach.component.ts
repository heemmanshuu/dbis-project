import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deltrcoach',
  templateUrl: './deltrcoach.component.html',
  styleUrls: ['../app.component.scss']
})
export class DeltrcoachComponent implements OnInit {

  trcoachForm = new FormGroup({
    tr_no : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    trcoach_id : new FormControl('', Validators.required),
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delTrcoach([this.trcoachForm.value.tr_no,
      this.trcoachForm.value.date,
      this.trcoachForm.value.coach_id])
  .subscribe(tr_coach => {});
  this.trcoachForm.reset();
  }

}

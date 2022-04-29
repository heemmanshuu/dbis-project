import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deltrcomp',
  templateUrl: './deltrcomp.component.html',
  styleUrls: ['../app.component.scss']
})
export class DeltrcompComponent implements OnInit {

  trcompForm = new FormGroup({
    tr_no : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required)
  });
  constructor(private integrateService : IntegrateService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.delTrcomp([this.trcompForm.value.tr_no,
    this.trcompForm.value.date])
  .subscribe(trcomp => {});
  this.trcompForm.reset();
  }

}

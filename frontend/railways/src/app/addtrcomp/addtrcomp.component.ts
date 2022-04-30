import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from '../integrate.service';

@Component({
  selector: 'app-addtrcomp',
  templateUrl: './addtrcomp.component.html',
  styleUrls: ['../app.component.scss']
})
export class AddtrcompComponent implements OnInit {


  trcompForm = new FormGroup({
    tr_no : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
    total_coaches : new FormControl('', Validators.required),
    engine_id : new FormControl(),
    total_stations : new FormControl('', Validators.required)
  });

  constructor(private integrateService: IntegrateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.addTrcomp([this.trcompForm.value.tr_no,
    this.trcompForm.value.date,
    this.trcompForm.value.total_coaches,
    this.trcompForm.value.engine_id,
    this.trcompForm.value.total_stations
  ])
  .subscribe(trcomp => {});
  this.trcompForm.reset();

  }

}

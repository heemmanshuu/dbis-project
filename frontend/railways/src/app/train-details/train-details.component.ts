import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { train } from '../interfaces/train';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['../app.component.scss']
})
export class TrainDetailsComponent implements OnInit {
  tr_id = new FormGroup({
    tr_no : new FormControl('', Validators.required),
  });
  train ?: train;
  constructor(private integrateService : IntegrateService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.route.navigate([`/traindetails/${this.tr_id.value.tr_no}`]);
    this.integrateService.getTrain(this.tr_id.value.tr_no)
  .subscribe(tr => this.train = tr[0]);
  // this.tr_id.reset();
  }
  
}

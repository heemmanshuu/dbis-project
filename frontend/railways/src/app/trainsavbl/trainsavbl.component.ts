import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trains } from '../interfaces/trains';

@Component({
  selector: 'app-trainsavbl',
  templateUrl: './trainsavbl.component.html',
  styleUrls: ['../app.component.scss']
})
export class TrainsavblComponent implements OnInit {
  tr_id = new FormGroup({
    strt : new FormControl('', Validators.required),
    dst : new FormControl('', Validators.required),
  });
  trains : trains[] = [];
  constructor(private integrateService : IntegrateService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.integrateService.getTrains(this.tr_id.value.strt,this.tr_id.value.dst)
  .subscribe(rt => this.trains = rt);
  // this.tr_id.reset();
  }
}

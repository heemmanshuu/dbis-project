import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../integrate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { route } from '../interfaces/route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['../app.component.scss']
})
export class TrainRouteComponent implements OnInit {
  tr_id = new FormGroup({
    tr_no : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required),
  });
  route : route[] = [];
  constructor(private integrateService : IntegrateService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.integrateService.getRoute(this.tr_id.value.tr_no,this.tr_id.value.date)
  .subscribe(rt => {this.route = rt;});
  // this.tr_id.reset();
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoachComponent } from './addcoach/addcoach.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddengineComponent } from './addengine/addengine.component';
import { AddstationComponent } from './addstation/addstation.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { AddtrcompComponent } from './addtrcomp/addtrcomp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelcoachComponent } from './delcoach/delcoach.component';
import { DelemployeeComponent } from './delemployee/delemployee.component';
import { DelengineComponent } from './delengine/delengine.component';
import { DelstationComponent } from './delstation/delstation.component';
import { DeltrainComponent } from './deltrain/deltrain.component';
import { DeltrcompComponent } from './deltrcomp/deltrcomp.component';
import { UpdatecoachComponent } from './updatecoach/updatecoach.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UpdateengineComponent } from './updateengine/updateengine.component';
import { UpdatestationComponent } from './updatestation/updatestation.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { UpdatetrcompComponent } from './updatetrcomp/updatetrcomp.component';
import { TrainRouteComponent } from './train-route/train-route.component';
import { TrainCompositionComponent } from './train-composition/train-composition.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddtrcoachComponent } from './addtrcoach/addtrcoach.component';
import { DeltrcoachComponent } from './deltrcoach/deltrcoach.component';
import { UpdatetrcoachComponent } from './updatetrcoach/updatetrcoach.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addtrain', component:AddtrainComponent},
  {path: 'traindetails',component:TrainDetailsComponent},
  {path: 'trainroute',component:TrainRouteComponent},
  {path: 'traincomp',component:TrainCompositionComponent},
  {path: 'deltrain', component:DeltrainComponent},
  {path: 'updatetrain', component:UpdatetrainComponent},
  {path: 'addstation', component:AddstationComponent},
  {path: 'delstation', component:DelstationComponent},
  {path: 'updatestation', component:UpdatestationComponent},
  {path: 'addcoach', component:AddcoachComponent},
  {path: 'delcoach', component:DelcoachComponent},
  {path: 'updatecoach', component:UpdatecoachComponent},
  {path: 'addengine', component:AddengineComponent},
  {path: 'delengine', component:DelengineComponent},
  {path: 'updateengine', component:UpdateengineComponent},
  {path: 'addemployee', component:AddemployeeComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'delemployee', component:DelemployeeComponent},
  {path: 'updateemployee', component:UpdateemployeeComponent},
  {path: 'addtrcomp', component:AddtrcompComponent},
  {path: 'deltrcomp', component:DeltrcompComponent},
  {path: 'updatetrcomp', component:UpdatetrcompComponent},
  {path: 'traindetails/:tr_id', component:TrainDetailsComponent},
  {path: 'trainroute/:tr_id/:date', component:TrainRouteComponent},
  {path: 'traincomp/:tr_id/:date', component:TrainCompositionComponent},
  {path: 'employee/:id', component:EmployeeComponent},
  {path: 'addtrcoach', component:AddtrcoachComponent},
  {path: 'deltrcoach', component:DeltrcoachComponent},
  {path: 'updatetrcoach', component:UpdatetrcoachComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

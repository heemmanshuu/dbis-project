import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstationComponent } from './addstation/addstation.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelstationComponent } from './delstation/delstation.component';
import { DeltrainComponent } from './deltrain/deltrain.component';
import { UpdatestationComponent } from './updatestation/updatestation.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addtrain', component:AddtrainComponent},
  {path: 'deltrain', component:DeltrainComponent},
  {path: 'updatetrain', component:UpdatetrainComponent},
  {path: 'addstation', component:AddstationComponent},
  {path: 'delstation', component:DelstationComponent},
  {path: 'updatestation', component:UpdatestationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

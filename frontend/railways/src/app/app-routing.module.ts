import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeltrainComponent } from './deltrain/deltrain.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addtrain', component:AddtrainComponent},
  {path: 'deltrain', component:DeltrainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

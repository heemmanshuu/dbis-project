import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addtrain', component:AddtrainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtrainComponent } from './addtrain/addtrain.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeltrainComponent } from './deltrain/deltrain.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';
import { AddstationComponent } from './addstation/addstation.component';
import { DelstationComponent } from './delstation/delstation.component';
import { UpdatestationComponent } from './updatestation/updatestation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddtrainComponent,
    DeltrainComponent,
    UpdatetrainComponent,
    AddstationComponent,
    DelstationComponent,
    UpdatestationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

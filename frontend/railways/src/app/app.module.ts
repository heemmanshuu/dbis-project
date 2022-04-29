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
import { AddcoachComponent } from './addcoach/addcoach.component';
import { DelcoachComponent } from './delcoach/delcoach.component';
import { UpdatecoachComponent } from './updatecoach/updatecoach.component';
import { AddengineComponent } from './addengine/addengine.component';
import { DelengineComponent } from './delengine/delengine.component';
import { UpdateengineComponent } from './updateengine/updateengine.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DelemployeeComponent } from './delemployee/delemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AddtrcompComponent } from './addtrcomp/addtrcomp.component';
import { DeltrcompComponent } from './deltrcomp/deltrcomp.component';
import { UpdatetrcompComponent } from './updatetrcomp/updatetrcomp.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AddtrcoachComponent } from './addtrcoach/addtrcoach.component';
import { DeltrcoachComponent } from './deltrcoach/deltrcoach.component';
import { UpdatetrcoachComponent } from './updatetrcoach/updatetrcoach.component';
import { AddroutestationsComponent } from './addroutestations/addroutestations.component';
import { DelroutestationsComponent } from './delroutestations/delroutestations.component';
import { UpdateroutestationsComponent } from './updateroutestations/updateroutestations.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddtrainComponent,
    DeltrainComponent,
    UpdatetrainComponent,
    AddstationComponent,
    DelstationComponent,
    UpdatestationComponent,
    AddcoachComponent,
    DelcoachComponent,
    UpdatecoachComponent,
    AddengineComponent,
    DelengineComponent,
    UpdateengineComponent,
    AddemployeeComponent,
    DelemployeeComponent,
    UpdateemployeeComponent,
   
    AddtrcompComponent,
    DeltrcompComponent,
    UpdatetrcompComponent,
    TrainDetailsComponent,
    AddtrcoachComponent,
    DeltrcoachComponent,
    UpdatetrcoachComponent,
    AddroutestationsComponent,
    DelroutestationsComponent,
    UpdateroutestationsComponent
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

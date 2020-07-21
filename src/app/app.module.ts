import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { MainSheduleModule } from './main-shedule/main-shedule.module';
import { DaySheduleModule } from './day-shedule/day-shedule.module';
import { MainSheduleComponent } from './main-shedule/main-shedule.component';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { EventsDB } from './day-shedule/services/events.service';
import { EventsListComponent  } from './day-shedule//events-list/events-list.component';
import { AddEventFormComponent } from './day-shedule/add-event-form/add-event-form.component';
import { LoginModule } from './login/login.module';
import { EventsMainListComponent } from './events-main-list/events-main-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewUserComponent,
    MainSheduleComponent,
    EventsMainListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainSheduleModule,
    DaySheduleModule,
    LoginModule
    
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, EventsDB],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';
import { DayComponent } from './day/day.component';
import { AppRoutingModule } from './app-routing.module';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { HttpClientModule } from '@angular/common/http';
import { EventRedactorComponent } from './event-redactor/event-redactor.component'

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationButtonsComponent,
    CalendarPanelComponent,
    DayComponent,
    DaySheduleComponent,
    ExampleComponentComponent,
    EventRedactorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationButtonsComponent,
    CalendarPanelComponent,
    DayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

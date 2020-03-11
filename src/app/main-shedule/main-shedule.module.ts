import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ShedulePanelComponent } from './shedule-panel/shedule-panel.component';
import { MainSheduleComponent } from './main-shedule.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  declarations: [ButtonsComponent, ShedulePanelComponent, MainSheduleComponent, DayComponent, WeekComponent],
  imports: [
    CommonModule
  ],
  exports: [MainSheduleComponent]
})
export class MainSheduleModule { }

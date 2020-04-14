import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ShedulePanelComponent } from './shedule-panel/shedule-panel.component';

import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { HoverDayDirective } from './directives/hover-day.directive';

@NgModule({
  declarations: [ButtonsComponent, ShedulePanelComponent, DayComponent,
     WeekComponent, HoverDayDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonsComponent]
})
export class MainSheduleModule { }

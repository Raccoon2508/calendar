import { SingleEventComponent } from './single-event/single-event.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { EditFormComponent } from './edit-event-form/edit-event-form.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaySheduleComponent } from './day-shedule.component';
import { PriorityColorDirective } from './directives/priority-color.directive';
import { ColorDirective } from './directives/example.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DaySheduleRoutingModule } from './day-shedule-routing.module';
import { DaySheduleListComponent } from './day-shedule-list/day-shedule-list.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, DaySheduleRoutingModule
  ],
  declarations: [EventsListComponent, EditFormComponent
    , SingleEventComponent, DaySheduleComponent, PriorityColorDirective, ColorDirective,
    AddEventFormComponent,
    DaySheduleListComponent],
  exports: [DaySheduleComponent, EventsListComponent, SingleEventComponent]
})
export class DaySheduleModule { }

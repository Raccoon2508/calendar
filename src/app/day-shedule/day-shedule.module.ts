import { SingleEventComponent } from './single-event/single-event.component';
import { EditEventFormComponent } from './edit-event-form/edit-event-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaySheduleComponent } from './day-shedule.component';
import { PriorityColorDirective } from './directives/priority-color.directive';
import { ColorDirective } from './directives/example.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsListComponent, AddFormComponent, EditEventFormComponent
    , SingleEventComponent, DaySheduleComponent, PriorityColorDirective, ColorDirective ],
  exports: [DaySheduleComponent]
})
export class DaySheduleModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { DaySheduleListComponent } from './day-shedule-list/day-shedule-list.component';
import { EditFormComponent } from './edit-event-form/edit-event-form.component';

const routes: Routes = [
    { path: '', component: DaySheduleListComponent},
    { path: 'newEvent', component: AddEventFormComponent},
    { path: 'edit/:id', component: EditFormComponent, pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DaySheduleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';
import { HeaderComponent } from './header/header.component';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { EventRedactorComponent } from './event-redactor/event-redactor.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { NewUserComponent } from  './new-user/new-user.component';



const routes: Routes = [
  { path: '', component: NavigationButtonsComponent, canActivate:[] },
  { path: 'login', component: HeaderComponent },
  { path: 'day/:id', component: DaySheduleComponent},
  //{ path: 'day/:id/:eventId', component: EventEditorComponent},
  { path: 'day/:id/newEvent', component: EventRedactorComponent},
  { path: 'newUser', component: NewUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

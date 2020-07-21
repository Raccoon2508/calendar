import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { MainSheduleComponent } from './main-shedule/main-shedule.component';
import { AddEventFormComponent } from './day-shedule/add-event-form/add-event-form.component';
import { LoginComponent } from './login/login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { EventsMainListComponent } from './events-main-list/events-main-list.component';

const dayRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: MainSheduleComponent, canActivate: [] },
  { path: 'day/:y/:m/:d/table', loadChildren:
  () => import('./day-shedule/day-shedule.module').then(m => m.DaySheduleModule)},
  { path: 'events-full-list', component: EventsMainListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(dayRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

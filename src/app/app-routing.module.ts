import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { NewUserComponent } from  './new-user/new-user.component';
import { MainSheduleComponent } from './main-shedule/main-shedule.component';
import { AddEventFormComponent } from './day-shedule/add-event-form/add-event-form.component';

const dayRoutes: Routes = [
  { path: '', component: MainSheduleComponent, canActivate: [] },
  { path: 'day/:y/:m/:d/table', loadChildren:
  () => import('./day-shedule/day-shedule.module').then(m => m.DaySheduleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(dayRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

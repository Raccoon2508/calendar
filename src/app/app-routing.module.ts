import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DaySheduleComponent } from './day-shedule/day-shedule.component';
import { NewUserComponent } from  './new-user/new-user.component';
import { MainSheduleComponent } from './main-shedule/main-shedule.component';

const routes: Routes = [
  { path: '', component: MainSheduleComponent, canActivate: [] },
  { path: 'login', component: HeaderComponent },
  { path: 'day/:id', component: DaySheduleComponent},
  { path: 'newUser', component: NewUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

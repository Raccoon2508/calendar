import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'new-user', component: NewUserComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, NewUserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }

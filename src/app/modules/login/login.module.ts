import { SharedModule } from '@actor/shared/shared.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule
  ]
})
export class LoginModule { }

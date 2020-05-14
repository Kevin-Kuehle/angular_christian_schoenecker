import { Observable } from 'rxjs';
import { AuthService } from '@actor/core/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  uid: Observable<string> = this.auth.uid;
  isAdmin = this.auth.isAdmin;
  loginFormGroup: FormGroup;
  adminHandler;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
      passwort: ['', [Validators.required, Validators.minLength(5), Validators.nullValidator]]
    });
  }


  ngOnDestroy() {

    if (this.adminHandler) {
      this.adminHandler.unsubscribe();
    }

  }

  async onSubmit() {
    console.log(this.loginFormGroup.get('email').value);


    this.auth.login(this.loginFormGroup.get('email').value, this.loginFormGroup.get('passwort').value);

    this.auth.isAdmin.subscribe(v => {
      if (v) {
        this.router.navigate(['/admin/home']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    this.loginFormGroup.reset();
    this.auth.logout();
  }
}

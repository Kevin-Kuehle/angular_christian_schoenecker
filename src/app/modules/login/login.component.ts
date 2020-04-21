import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AuthService } from '@actor/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  uid: Observable<string> = this.auth.uid;
  isAdmin = this.auth.isAdmin;
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private routerLink: Router) {

    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
      passwort: ['', [Validators.required, Validators.minLength(5), Validators.nullValidator]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login(this.loginFormGroup.get('email').value, this.loginFormGroup.get('passwort').value);
    this.auth.uid.subscribe(uid => {
      if (uid !== null && uid !== undefined) {
        this.loginFormGroup.reset();
        this.routerLink.navigate(['/']);
      }
    });
  }

  logout() {
    this.auth.logout();
  }
}

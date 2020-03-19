import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
      passwort: ['', [Validators.required, Validators.minLength(5), Validators.nullValidator]]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submited');

  }
}

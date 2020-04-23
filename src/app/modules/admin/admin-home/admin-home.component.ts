import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  uid: Observable<String>;
  isAdmin: Observable<Boolean>;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.uid = this.auth.uid;
    this.auth.isAdmin.subscribe(status => {
      if (!status) {
        this.router.navigate(['/home'])
      }
    });
  }
}

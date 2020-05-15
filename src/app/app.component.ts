import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';
import * as AOS from 'aos';
@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'actorWebsite';

  ngOnInit() {
    AOS.init({
      duration: 800,
    });
  }
}

import { MobileHandlerService } from './../mobile-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobile;


  constructor(private data: MobileHandlerService) { }

  ngOnInit() {

    this.data.isMobile.subscribe(status => this.isMobile = status);
  }

  scroll(el: string) {
    const toScroll = document.querySelector('#' + el);
    toScroll.scrollIntoView({ behavior: 'smooth' });
  }
}

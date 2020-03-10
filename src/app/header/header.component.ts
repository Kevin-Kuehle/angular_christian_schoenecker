import { MobileHandlerService } from './../mobile-handler.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobile;

  @ViewChild('mobileMenu') mobileMenu: ElementRef;


  public headerClasses = {
    flyOut: false
  };

  constructor(private data: MobileHandlerService, private renderer: Renderer2) { }

  ngOnInit() {

    this.data.isMobile.subscribe(status => this.isMobile = status);
    this.hideTopBarHandler();
  }

  scroll(el: string) {
    const toScroll = document.querySelector('#' + el);
    toScroll.scrollIntoView({ behavior: 'smooth' });
    this.toggleMobileMenu();
  }

  toggleMobileMenu() {
    this.mobileMenu.nativeElement.classList.toggle('menuOn');
  }

  hideTopBarHandler() {
    let lastScrollTop = 0;

    addEventListener('scroll', (test) => {
      const siteYoffset = window.pageYOffset;

      if (lastScrollTop < siteYoffset) {
        this.headerClasses.flyOut = true;
      } else {
        this.headerClasses.flyOut = false;
      }

      lastScrollTop = siteYoffset <= 0 ? 0 : siteYoffset;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobile = false;
  public siteWidth;
  private mobileWidt = 890;

  constructor() { }

  ngOnInit() {
    this.checkSiteWidth();
    this.siteWidthController();
  }



  checkSiteWidth() {
    this.siteWidth = window.innerWidth;

    if (this.siteWidth < this.mobileWidt) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    console.log(this.isMobile);
  }

  siteWidthController() {
    window.addEventListener('resize', () => {
      this.checkSiteWidth();

    });
  }


}

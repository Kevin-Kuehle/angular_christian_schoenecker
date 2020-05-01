import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public triggerWidth = 752;
  public windowWidth;
  public isTriggered;

  constructor() { }

  ngOnInit() {
    this.setWidth();
    this.windowWidthWatcher();
  }

  private setWidth() {
    this.windowWidth = window.innerWidth;

    if (this.windowWidth < this.triggerWidth) {
      this.isTriggered = true;
    } else {
      this.isTriggered = false;
    }
  }

  private windowWidthWatcher() {
    window.addEventListener('resize', () => {
      this.setWidth();
    });
  }
  scroll(el: string) {
    const toScroll = document.querySelector('#' + el);
    toScroll.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 'sm': em(640px, $bp-context),
  // 'md': em(752px, $bp-context),
  // 'lg': em(992px, $bp-context),
  // 'xl': em(1168px, $bp-context),
  // 'xxl': em(1366px, $bp-context));


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
}

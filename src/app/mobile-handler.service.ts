import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileHandlerService {

  private messageSource = new BehaviorSubject<string>('Default Message');
  private globalIsMobile = new BehaviorSubject<boolean>(true);
  currentMessage = this.messageSource.asObservable();
  isMobile = this.globalIsMobile.asObservable();

  private mobileWidt = 992;
  private siteWidth: number;
  public isMobileStatus: boolean = null;

  constructor() {
    this.checkSiteWidth();
    this.siteWidthController();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeMobileStatus(status: boolean) {
    this.globalIsMobile.next(status);
  }

  checkSiteWidth() {
    this.siteWidth = window.innerWidth;

    if (this.siteWidth < this.mobileWidt) {

      this.isMobileStatus = true;
      this.changeMobileStatus(this.isMobileStatus);

    } else {

      this.isMobileStatus = false;
      this.changeMobileStatus(this.isMobileStatus);
    }
  }

  siteWidthController() {
    window.addEventListener('resize', () => {
      this.checkSiteWidth();
    });
  }
}

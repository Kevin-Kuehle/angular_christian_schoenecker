import { MobileHandlerService } from './../mobile-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isMobile: boolean;

  constructor(private data: MobileHandlerService) { }

  ngOnInit(): void {

    this.data.isMobile.subscribe(message => this.isMobile = message);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() item;
  @Input() index;

  public showLightBox = false;


  constructor() { }

  ngOnInit(): void {

  }
  showImage(index) {
    this.showLightBox = !this.showLightBox;
  }


  clickTrigger(item, event) {
    console.log(item);
    console.log(event.target);

    if (event.target !== item) {
      this.showLightBox = false;
    }
  }
}

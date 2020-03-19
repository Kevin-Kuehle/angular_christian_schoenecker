import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-media-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('item') movie;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {
  }

}

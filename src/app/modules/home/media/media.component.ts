import { BehaviorSubject } from 'rxjs';
import { MobileHandlerService } from '../../../core/services/mobile-handler.service';
import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public movies;
  public item;
  public index;
  public isMobile;


  // tslint:disable-next-line:ban-types
  public toShow;

  constructor(private db: DatabaseService, private mobileS: MobileHandlerService) { }

  ngOnInit(): void {

    this.db.getMediaVideos().subscribe(data => {
      this.movies = data;
    });

    this.mobileS.isMobile.subscribe(data => {
      this.isMobile = data;

      if (this.isMobile) {
        this.toShow = 3;
      } else {
        this.toShow = 6;
      }
    });
  }
}

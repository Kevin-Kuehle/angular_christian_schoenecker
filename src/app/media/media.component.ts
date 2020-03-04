import { DatabaseService } from './../database.service';
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
  public toShow = 6;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {

    this.db.getMediaVideos().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}

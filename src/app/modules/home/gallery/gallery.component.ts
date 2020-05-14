import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images;
  public toShow = 8;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {

    // this.data.getGalleryImages().subscribe(data => {
    //   this.images = data;
    // });

    this.db.ft_getImages().then(data => {
      console.log(data);

    })

  };
}


import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images;

  constructor(private data: DatabaseService) { }

  ngOnInit(): void {

    this.data.getGalleryImages().subscribe(data => {
      this.images = data;
      console.log(this.images);
    });
  }


  showImage(index) {

    console.log(this.images[index]);


  }
}

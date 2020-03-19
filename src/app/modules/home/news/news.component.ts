import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public data;
  public toShow = 0;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {

    this.db.getAllNews().subscribe(
      data => this.data = data
    );

  }



  showMore() {
    this.toShow++;
  }

}

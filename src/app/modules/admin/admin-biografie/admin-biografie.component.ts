import { DatabaseService } from './../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-admin-biografie',
  templateUrl: './admin-biografie.component.html',
  styleUrls: ['./admin-biografie.component.scss']
})
export class AdminBiografieComponent implements OnInit {

  // biografie$;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    // this.db.ft_getBiografie().subscribe(bio => this.biografie$ = bio);
  }

}

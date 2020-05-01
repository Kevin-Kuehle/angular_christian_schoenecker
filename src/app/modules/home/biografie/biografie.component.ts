import { map } from 'rxjs/operators';
import { Biografie } from './../../../shared/models/biografie';
import { DatabaseService } from '@actor/core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-biografie',
  templateUrl: './biografie.component.html',
  styleUrls: ['./biografie.component.scss']
})
export class BiografieComponent implements OnInit {
  biografie: any;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {


    this.db.ft_getBiografie().subscribe(v => {
      this.biografie = v[0];

    });


  }
}

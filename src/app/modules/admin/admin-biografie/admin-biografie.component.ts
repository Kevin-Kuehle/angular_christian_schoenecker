import { DatabaseService } from './../../../core/services/database.service';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'ac-admin-biografie',
  templateUrl: './admin-biografie.component.html',
  styleUrls: ['./admin-biografie.component.scss']
})
export class AdminBiografieComponent implements OnInit {

  editorStyle = {
    'width': '100%',
    'max-width': '900px',
    'position': 'relative',
    'display': 'block'
  }

  biografie$;
  shortText: string = '';
  longText: string = '';

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.ft_getBiografie().subscribe(bio => {
      this.biografie$ = bio[0];
      this.shortText = this.biografie$.shortText;
      this.longText = this.biografie$.longText;
    });
  }

  submitSaveBio() {

    const data = {
      shortText: this.shortText,
      longText: this.longText
    }

    this.db.ft_editDoc('Biografie', 'JZEcqn3Qt2EavymWXEjL', data)
  }
}

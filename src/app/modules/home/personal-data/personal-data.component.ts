import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ac-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {


  public personData;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.ft_getPersonData().subscribe(data => {
      this.personData = data;
    });
  }
}

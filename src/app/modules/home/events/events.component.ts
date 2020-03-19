import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ac-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {


  public events;

  constructor(private data: DatabaseService) { }

  ngOnInit(): void {
    this.data.getAllEvents().subscribe(data => this.events = data);
  }

}



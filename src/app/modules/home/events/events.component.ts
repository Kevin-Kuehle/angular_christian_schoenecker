import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit, HostBinding } from '@angular/core';
//
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
//


@Component({
  selector: 'ac-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: []
})
export class EventsComponent implements OnInit {


  public events;

  constructor(private data: DatabaseService) { }

  ngOnInit(): void {
    this.data.ft_getEvents().subscribe(events => this.events = events)
  }
}



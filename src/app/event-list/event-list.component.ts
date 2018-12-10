import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Object;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  editEvent() {
    this.step++;
  }

  /*deleteEvent() {
    this.step--;
  }*/

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe( data => {
      this.events = data
      console.log(this.events)
    })
  }
}

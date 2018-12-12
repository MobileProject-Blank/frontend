import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  tags: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTags().subscribe( data => {
      this.tags = data
      console.log(this.tags)
    })
  }

}

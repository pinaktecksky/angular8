import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/author';
//importing EventEmitter from events was giving the error for not initializing
// import {EventEmitter} from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() authors: Author[];
  @Output() authorClickedEvent = new EventEmitter();
  nameClass = 'nameClass';
  bookClass = 'bookClass';

  childClasses = {
    savable: true,
    clickable: false,
    movable: true,
  };

  childStyles = {
    'background-color': true ? 'red' : 'green',
    border: true ? 'solid 1px blue' : '',
    cursor: true ? 'crosshair' : 'hand',
  };
  constructor() {}

  authorClicked(authorName: string) {
    console.log('authorName :', authorName);
    this.authorClickedEvent.emit(authorName);
  }

  ngOnInit() {}
}

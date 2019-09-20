import { Component, OnInit } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  authors: Author[] = [
    { name: 'Pinak Patel', bookName: 'Book1' },
    { name: 'Harshil Patel', bookName: 'Book2' },
    { name: 'Yashvi Patel', bookName: 'Book3' },
    { name: 'Krishna Patel', bookName: 'Book4' },
  ];

  onAuthorClickedEvent(data) {
    console.log('onAuthorClickedEvent Event Occured with data :', data);
  }
  constructor() {}

  ngOnInit() {}
}

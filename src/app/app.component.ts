import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  title = 'App';

  dob = new Date(1980, 2, 4);
  toggle = true;

  people: Person[] = [
    {name: 'Pinak', gender: 'male'},
    {name: 'Harshil', gender: 'male'},
    {name: 'Yashvi', gender: 'female'},
    {name: 'Krishna', gender: 'female'},
  ];

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}

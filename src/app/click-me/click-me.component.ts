import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css'],
})
export class ClickMeComponent implements OnInit {
  clickMessage: string;
  values = '';

  constructor() {}

  onClicked(event) {
    this.clickMessage = 'Button is Clicked';
  }

  // onkey(event: KeyboardEvent) {
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }

  onkey(data) {
    this.values += data.value + ' | ';
  }


  ngOnInit() {}
}

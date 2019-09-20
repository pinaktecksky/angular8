import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular8 App';
  imgUrl = 'https://placeimg.com/300/500/nature/grayscale';
  buttonCondition = false;
  name = '';

  // printing the value of inputbox from front.
  // onClick(input) {
  //   const inputText: string = input.value;
  //   inputText.length > 0
  //     ? (this.buttonCondition = false)
  //     : (this.buttonCondition = true);
  //   console.log(inputText);
  // }

  // printing the event obect passed from the front.
  onClick(event) {
    console.log('Event Object : ', event);
  }
}

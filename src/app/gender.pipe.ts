import { Pipe, PipeTransform } from '@angular/core';
import {Person} from './person';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(people: Person[], gender): any {
    return people.filter(person => person.gender === gender);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonData } from './personData';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //messages: Array<string> = [];
  people: Array<PersonData> = [];
  personData = new BehaviorSubject(new PersonData(0, 'Person 1', ''));
  //share = this.personData.asObservable();
  //this.people.push(this.personData);

  sendMessage(person: PersonData, id: number) {
    /*
    for (let i = 0; i < people.length; i++) {
      const element = array[i];
      
    }
    */
    if (person.getId === id) {
      this.personData.next(person);
      this.people.push(person);
      //this.messages.push(person.getMessages);
      console.log('PEOPLE ARRAY CONTAINS: \n');
      console.log(this.people);
    }
  }

  sendPerson(person: PersonData) {
    this.personData.next(person);
    //this.people.push(person);
  }

  readMessage() {
    //this.messages.push(this.personData.message)

    //for (const person of people) {

    //}
    return this.personData.asObservable();
  }

  clearMessages() {
    this.people = [];
    //this.messages = [];
  }
  //constructor() { }
}

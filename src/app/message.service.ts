import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonData } from './personData';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  conversation: BehaviorSubject<PersonData[]> = new BehaviorSubject<
    PersonData[]
  >([]);
  messages: Array<PersonData> = [];

  conversations = this.conversation.asObservable();

  sendMessage(newMessage: PersonData) {
    console.log('new message from app.component');
    console.log(newMessage);
    this.messages.push(newMessage);
    this.conversation.next(Object.assign([], this.messages));
  }

  sendPerson(person: PersonData) {
    this.conversation.next(Object.assign([], person));
    //this.people.push(person);
  }

  readMessage() {
    return this.conversations;
  }

  clearMessages() {
    this.messages = [];
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new Subject();

  sendMessage(message: string) {
    // it is used to publish data
    this.subject.next(message);
  }

  readMessage() {
    // asObservable helps us to prevent the
    // leaks of Observable from outside of the subject
    return this.subject.asObservable();
  }

  /*
  clearMessages() {
    this.subject.next();
  }
  */

  //constructor() { }
}

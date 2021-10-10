import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new Subject();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  readMessage() {
    return this.subject.asObservable();
  }

  /*
  clearMessages() {
    this.subject.next();
  }
  */

  //constructor() { }
}

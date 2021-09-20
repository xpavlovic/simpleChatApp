import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //chatWindow: boolean = true;

  people: Array<any> = [];
  messages: Array<string> = [];
  //numberOfPeople = 0;

  subscription: any;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.subscription = this.messageService
      .readMessage()
      .subscribe((message) => {
        this.messages.push(String(message));
      });
  }

  addNewPerson() {
    if (this.people.length !== 9) {
      this.people = [...this.people, this.people.length + 1];
      console.log('====================================');
      console.log(this.people.indexOf(this.people.length));
      console.log('====================================');

      //this.numberOfPeople += 1;
      //this.messageService.addPerson('Person ' + String(this.numberOfPeople));

      //this.people.push('Person' + String(numberOfPeople));
    }
  }

  clearChatWindow() {
    //this.chatWindow = !this.chatWindow;
    //this.messageService.clearMessages();
    this.messages = [];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

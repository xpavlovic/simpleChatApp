import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chatWindow: boolean = true;

  people: Array<any> = [];

  messages: Array<string> = [];

  addPerson() {
    if (this.people.length !== 9) {
      this.people = [...this.people, this.people.length + 1];
      console.log('====================================');
      console.log(this.people.indexOf(this.people.length));
      console.log('====================================');
    }
  }

  addMessage(newMessage: string) {
    this.messages.push(newMessage);
    console.log('====================================');
    console.log(this.messages);
    console.log('====================================');
  }

  clearChatWindow() {
    this.chatWindow = !this.chatWindow;
  }
}

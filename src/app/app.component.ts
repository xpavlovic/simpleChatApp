import { Component, OnInit, Inject, Input } from '@angular/core';
import { MessageService } from './message.service';
import { PersonData } from './personData';
import { Observable } from 'rxjs';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  person!: Observable<PersonData[]>;
  people: Array<any> = [];

  subscription: any;
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.person = this.messageService.readMessage();
  }

  addNewPerson() {
    if (this.people.length === 9) return;

    let newPerson = new PersonData(0, '', '');
    newPerson.setId = this.people.length;
    newPerson.setName = 'Person ' + this.people.length.toString();
    this.people.push(newPerson);
    console.log(this.people);
    this.messageService.sendPerson(newPerson);
  }

  clearChatWindow() {
    this.messageService.clearMessages();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

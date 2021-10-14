import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { PersonData } from '../personData';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  msg = new FormControl('', [Validators.required]);
  subscription: any;
  prsnName = '';
  person!: PersonData;
  /*
  c: number = 1;
  person: Person = {
    message: this.msg.value,
    name: 'Person 1',
  };
  */
  //subscription: any;
  constructor(public messageService: MessageService) {}

  //clear text when user sends the message
  clearText() {
    this.msg.reset();
  }

  sendNewMessage() {
    this.person.setMessage = String(this.msg.value);
    this.messageService.sendMessage(this.person, this.person.getId);
    console.log('senNewMessage from PERSON COMPONENT');
    console.log(this.person);
    this.clearText();
  }

  ngOnInit() {
    this.messageService.readMessage().subscribe((data) => (this.person = data));

    this.person = this.person;
    this.prsnName = this.person.getName;
    //console.log(tmp.message);

    //console.log(String(data.name));
  }
}

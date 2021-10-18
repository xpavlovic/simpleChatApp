import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { PersonData } from '../personData';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() name = '';
  msg = new FormControl('', [Validators.required]);

  personMessage: PersonData = new PersonData(0, '', '');

  constructor(public messageService: MessageService) {}

  //clear text when user sends the message
  clearText() {
    this.msg.reset();
  }

  sendNewMessage() {
    this.personMessage.setMessage = this.msg.value;
    this.personMessage.setName = this.name;
    this.messageService.sendMessage(this.personMessage);

    this.clearText();
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  msg = new FormControl('', [Validators.required]);
  subscription: any;

  c: number = 1;
  person: Person = {
    message: this.msg.value,
    name: 'Person 1',
  };

  //subscription: any;
  constructor(private messageService: MessageService) {}

  //clear text when user sends the message
  clearText() {
    this.msg.reset();
  }

  sendNewMessage() {
    this.person.message = this.msg.value;
    this.messageService.sendMessage(String(this.person.message));
    console.log(this.person);
    this.clearText();
  }

  ngOnInit() {
    /*
    let tmp;
    this.subscription = this.messageService.readMessage().subscribe((data) => {
      if (data !== null) {
        //this.person = data;
        this.person.name = String(data);
        
        //console.log(tmp.message);
        console.log(typeof data);
        //console.log(String(data.name));
      }

    });
    */
  }
}

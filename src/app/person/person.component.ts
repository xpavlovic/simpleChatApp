import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  message = new FormControl('', [Validators.required]);

  //people: string = '';
  //subscription: any;
  constructor(private messageService: MessageService) {}
  //clear text when user sends the message
  clearText() {
    this.message.setValue(undefined);
  }

  sendNewMessage() {
    this.messageService.sendMessage(this.message.value);
    this.clearText();
  }

  ngOnInit(): void {}

  /*
  
  ngOnInit() {
    this.subscription = this.messageService.getPerson().subscribe((person) => {
      this.people = String(person);
      console.log(this.people);
    });
  }
  @Input()
  personNumber: number = 0;

  
  constructor(public message: string) {
    message = this.message;
  }

  
  
  */
}

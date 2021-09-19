import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  message = new FormControl('', [Validators.required]);

  //clear text when user sends the message
  clearText() {
    this.message.setValue(undefined);
  }

  @Output() newMessage = new EventEmitter<string>();

  sendNewMessage(value: string) {
    this.newMessage.emit(value);
    this.clearText();
  }

  @Input()
  personNumber: number = 0;

  /*
  constructor(public message: string) {
    message = this.message;
  }

  */
  ngOnInit(): void {}
}

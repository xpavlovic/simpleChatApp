import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  Inject,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { MessageService } from './message.service';
import { People, Person } from './person';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('subgrid', { static: false, read: ViewContainerRef })
  target!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  people: Array<any> = [];
  person = {
    message: [''],
    name: [''],
  };
  c: number = 0;
  appendPerson: boolean = false;
  messages: Array<string> = [];

  subscription: any;
  constructor(
    private messageService: MessageService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.subscription = this.messageService
      .readMessage()
      .subscribe((message) => {
        this.messages.push(String(message));
      });
  }

  addNewPerson() {
    this.appendPerson = true;
    let childComponent = this.resolver.resolveComponentFactory(PersonComponent);
    if (this.c < 8) {
      this.componentRef = this.target.createComponent(childComponent);
      this.c++;
      /*
      this.person.name.push('Person ' + String(this.c + 1));
      this.person.message.push('');
      this.messageService.sendMessage(this.person.name[this.c]);
      this.people.push(this.person);
      console.log(this.person);
      */
    }
  }

  clearChatWindow() {
    //this.chatWindow = !this.chatWindow;
    //this.messageService.clearMessages();
    /*
    for (let index = 0; index < people.length; index++) {
      this.people[index] = [];
    }
    */
    //this.people = [];
    this.messages = [];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

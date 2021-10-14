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
import { PersonData } from './personData';
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

  person!: PersonData;
  numberOfPeople: number = 1;
  appendPerson: boolean = false;
  messages: Array<string> = [];

  subscription: any;
  constructor(
    public messageService: MessageService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.messageService.readMessage().subscribe((data) => (this.person = data));
    this.person = this.person;
    console.log('ngOnInit in the APP COMPONENT\n');
    console.log(this.person);

    //this.people.push(data);
  }

  addNewPerson() {
    this.appendPerson = true;
    let childComponent = this.resolver.resolveComponentFactory(PersonComponent);

    let newPerson = new PersonData(0, '', '');

    if (this.numberOfPeople < 9) {
      newPerson.setId = this.numberOfPeople;
      console.log('new id is:');
      console.log(newPerson.getId);
      newPerson.setName = 'Person ' + String(this.numberOfPeople + 1);

      this.componentRef = this.target.createComponent(childComponent);

      this.messageService.sendPerson(newPerson);

      console.log(newPerson);
      this.numberOfPeople++;
    }
  }

  clearChatWindow() {
    this.messageService.clearMessages();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

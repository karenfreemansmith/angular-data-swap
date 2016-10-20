import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thing1 } from './thing1.model';

@Component({
  selector: 'thing1s',
  template: `
    <p *ngFor="let thing1 of thing1s" (click)="becomeA2(thing1)">{{thing1.name}}</p>
    `
})

export class Thing1Component {
  @Input() thing1s: Thing1[];
  @Output() click1Sender = new EventEmitter();

  becomeA2(thing1ToSend: Thing1){
    console.log("becomeA2 called");
    this.click1Sender.emit(thing1ToSend);
  }
}

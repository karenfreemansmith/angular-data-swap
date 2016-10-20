import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thing2 } from './thing2.model';

@Component({
  selector: 'thing2s',
  template: `
    <p *ngFor="let thing2 of thing2s" (click)="becomeA1(thing2)">{{thing2.name}}</p>
    `
})

export class Thing2Component {
  @Input() thing2s: Thing2[];
  @Output() click2Sender = new EventEmitter();

  becomeA1(thing2ToSend: Thing2){
    console.log("becomeA1 called");
    this.click2Sender.emit(thing2ToSend);
  }
}

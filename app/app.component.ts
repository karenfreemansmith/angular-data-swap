import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thing1 } from './thing1.model';
import { Thing2 } from './thing2.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>It was a cold, cold, wet, rainy day....</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <thing1s
          [thing1s] = "masterThing1List"
          (click1Sender) = "add2($event)"
        ></thing1s>
      </div>
      <div class="col-sm-6">
        <thing2s
          [thing2s] = "masterThing2List"
          (click2Sender) = "add1($event)"
        ></thing2s>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterThing1List: Thing1[] = [
    new Thing1("Cat"),
    new Thing1("Hat"),
    new Thing1("Fish")
  ];
  public masterThing2List: Thing2[] = [
    new Thing2("Dish"),
    new Thing2("Cake"),
    new Thing2("Rake")
  ];

  add1(thing2ToConvert: Thing2){
    console.log("add1 called: " + thing2ToConvert);
    this.masterThing1List.push(new Thing1(thing2ToConvert.name));
    this.masterThing2List.splice(this.masterThing2List.indexOf(thing2ToConvert), 1);
  }

  add2(thing1ToConvert: Thing1){
    console.log("add2 called: " + thing1ToConvert);
    this.masterThing2List.push(new Thing2(thing1ToConvert.name));
    this.masterThing1List.splice(this.masterThing1List.indexOf(thing1ToConvert), 1);
  }
}

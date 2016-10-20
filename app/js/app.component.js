"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var thing1_model_1 = require('./thing1.model');
var thing2_model_1 = require('./thing2.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterThing1List = [
            new thing1_model_1.Thing1("Cat"),
            new thing1_model_1.Thing1("Hat"),
            new thing1_model_1.Thing1("Fish")
        ];
        this.masterThing2List = [
            new thing2_model_1.Thing2("Dish"),
            new thing2_model_1.Thing2("Cake"),
            new thing2_model_1.Thing2("Rake")
        ];
    }
    AppComponent.prototype.add1 = function (thing2ToConvert) {
        console.log("add1 called: " + thing2ToConvert);
        this.masterThing1List.push(new thing1_model_1.Thing1(thing2ToConvert.name));
        this.masterThing2List.splice(this.masterThing2List.indexOf(thing2ToConvert), 1);
    };
    AppComponent.prototype.add2 = function (thing1ToConvert) {
        console.log("add2 called: " + thing1ToConvert);
        this.masterThing2List.push(new thing2_model_1.Thing2(thing1ToConvert.name));
        this.masterThing1List.splice(this.masterThing1List.indexOf(thing1ToConvert), 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1>It was a cold, cold, wet, rainy day....</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <thing1s\n          [thing1s] = \"masterThing1List\"\n          (click1Sender) = \"add2($event)\"\n        ></thing1s>\n      </div>\n      <div class=\"col-sm-6\">\n        <thing2s\n          [thing2s] = \"masterThing2List\"\n          (click2Sender) = \"add1($event)\"\n        ></thing2s>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
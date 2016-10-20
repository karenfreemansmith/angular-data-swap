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
var core_1 = require("@angular/core");
var Thing2Component = (function () {
    function Thing2Component() {
        this.click2Sender = new core_1.EventEmitter();
    }
    Thing2Component.prototype.becomeA1 = function (thing2ToSend) {
        console.log("becomeA1 called");
        this.click2Sender.emit(thing2ToSend);
    };
    return Thing2Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Thing2Component.prototype, "thing2s", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Thing2Component.prototype, "click2Sender", void 0);
Thing2Component = __decorate([
    core_1.Component({
        selector: 'thing2s',
        template: "\n    <p *ngFor=\"let thing2 of thing2s\" (click)=\"becomeA1(thing2)\">{{thing2.name}}</p>\n    "
    }),
    __metadata("design:paramtypes", [])
], Thing2Component);
exports.Thing2Component = Thing2Component;
//# sourceMappingURL=thing2s.component.js.map
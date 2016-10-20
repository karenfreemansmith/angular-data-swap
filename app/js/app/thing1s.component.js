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
var Thing1Component = (function () {
    function Thing1Component() {
        this.click1Sender = new core_1.EventEmitter();
    }
    Thing1Component.prototype.becomeA2 = function (thing1ToSend) {
        console.log("becomeA2 called");
        this.click1Sender.emit(thing1ToSend);
    };
    return Thing1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Thing1Component.prototype, "thing1s", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Thing1Component.prototype, "click1Sender", void 0);
Thing1Component = __decorate([
    core_1.Component({
        selector: 'thing1s',
        template: "\n    <p *ngFor=\"let thing1 of thing1s\" (click)=\"becomeA2(thing1)\">{{thing1.name}}</p>\n    "
    }),
    __metadata("design:paramtypes", [])
], Thing1Component);
exports.Thing1Component = Thing1Component;
//# sourceMappingURL=thing1s.component.js.map
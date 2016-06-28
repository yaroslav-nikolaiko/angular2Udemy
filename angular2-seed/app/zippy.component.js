System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.title = "";
                    this.open = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.open = !this.open;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n        <div class=\"zippy\">\n            <div (click)=\"toggle()\"\n            class=\"zippy-title\">\n            <i class=\"pull-right glyphicon\"\n            [ngClass]=\"{\n                'glyphicon-chevron-down' : open,\n                'glyphicon-chevron-up' : !open\n            }\"></i>\n                {{title}}\n            </div>\n            <div *ngIf=\"open\"\n            class=\"zippy-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        ",
                        styles: ["\n        .zippy {\n            border: 1px solid #ccc;\n            border-radius: 2px;\n        }    \n        \n        .zippy .zippy-title {\n            padding: 20px;\n            font-weight: bold;\n        }\n        \n        .zippy .zippy-title:hover{\n            background: #F0F0F0;\n            cursor: pointer;\n        }\n        \n        .zippy .zippy-content{\n            padding: 20px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map
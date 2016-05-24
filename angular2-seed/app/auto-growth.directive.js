System.register(["angular2/core"], function(exports_1, context_1) {
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
    var AutoGrowthDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowthDirective = (function () {
                function AutoGrowthDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowthDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                };
                AutoGrowthDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
                };
                AutoGrowthDirective = __decorate([
                    core_1.Directive({
                        selector: "[autoGrowth]",
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowthDirective);
                return AutoGrowthDirective;
            }());
            exports_1("AutoGrowthDirective", AutoGrowthDirective);
        }
    }
});
//# sourceMappingURL=auto-growth.directive.js.map
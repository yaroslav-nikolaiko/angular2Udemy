System.register(['angular2/core', './courses.component', './author.component', "./favorite.component", "./like.component", "./voter.component", "./zippy.component"], function(exports_1, context_1) {
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
    var core_1, courses_component_1, author_component_1, favorite_component_1, like_component_1, voter_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isFavorite = false;
                    this.tweet = {
                        likes: 10,
                        active: true,
                        voteCount: 12,
                        myVote: 1
                    };
                }
                AppComponent.prototype.onClick = function (event) {
                    console.log(event);
                    //event.target.style.backgroundColor='blue';
                };
                AppComponent.prototype.onFavoriteChange = function (event) {
                    console.log(event);
                };
                AppComponent.prototype.onTweetChange = function (event) {
                    console.log(event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Hello Angular</h1>\n    <button (click)=\"onClick($event)\">Click Me 2</button>\n    <courses></courses>\n    <favorite [is-favorite]=\"true\" (change)=\"onFavoriteChange($event)\"></favorite>\n    <like [likes]=\"tweet.likes\" [active]=\"tweet.active\"></like>\n    <div style=\"margin-left: 10px\">\n        <voter [voteCount]=\"tweet.voteCount\" [myVote]=\"tweet.myVote\" (vote)=\"onTweetChange($event)\" ></voter>\n    </div>\n    \n    <authors></authors>\n    \n    <zippy title=\"This is Title\">This is Body</zippy>\n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, zippy_component_1.ZippyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
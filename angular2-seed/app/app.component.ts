import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './author.component';
import {FavoriteComponent} from "./favorite.component";
import {LikeComponent} from "./like.component";
import {VoterComponent} from "./voter.component";
import {ZippyComponent} from "./zippy.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello Angular</h1>
    <button (click)="onClick($event)">Click Me 2</button>
    <courses></courses>
    <favorite [is-favorite]="true" (change)="onFavoriteChange($event)"></favorite>
    <like [likes]="tweet.likes" [active]="tweet.active"></like>
    <div style="margin-left: 10px">
        <voter [voteCount]="tweet.voteCount" [myVote]="tweet.myVote" (vote)="onTweetChange($event)" ></voter>
    </div>
    
    <authors></authors>
    
    <zippy title="This is Title">This is Body</zippy>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, ZippyComponent]
})
export class AppComponent {
    isFavorite=false;

    tweet={
        likes: 10,
        active: true,
        voteCount:12,
        myVote: 1
    };

    onClick(event){
        console.log(event);
        //event.target.style.backgroundColor='blue';
    }

    onFavoriteChange(event){
        console.log(event);
    }

    onTweetChange(event){
        console.log(event);
    }

    
}
import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'voter',
    template: `
    <div  class="voter">
        <i class="glyphicon glyphicon-menu-up" 
        [class.vote-selected]="myVote>0" 
        (click)="onMenuUp()"
        ></i>
        <span>{{voteCount}}</span>
        <i class="glyphicon glyphicon-menu-down" 
        [class.vote-selected]="myVote<0"
        (click)="onMenuDown()"
        ></i>
    </div>
    `,
    styles:[`
        .voter{
            width: 20px;
            text-align: center;
            cursor: pointer;
            color: #999;
        }    
        .vote-selected{
            color: orange;
        }
    `]
})
export class VoterComponent{
    @Input() voteCount=0;
    @Input() myVote=0;

    @Output() vote = new EventEmitter();

    onMenuUp(){
        if(this.myVote<1){
            this.voteCount++;
            this.myVote++;
            this.vote.emit({vote: this.myVote});
        }

    }

    onMenuDown(){
        if(this.myVote>-1){
            this.voteCount--;
            this.myVote--;
            this.vote.emit({vote: this.myVote})
        }
    }
}
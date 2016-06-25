import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy">
            <div (click)="toggle()"
            class="zippy-title">
            <i class="pull-right glyphicon"
            [ngClass]="{
                'glyphicon-chevron-down' : open,
                'glyphicon-chevron-up' : !open
            }"></i>
                {{title}}
            </div>
            <div *ngIf="open"
            class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
        `,
    styles:[`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }    
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #F0F0F0;
            cursor: pointer;
        }
        
        .zippy .zippy-content{
            padding: 20px;
        }
    `]
})
export class ZippyComponent{
    @Input() title = "";
    open = false;

    toggle(){
        this.open = !this.open;
    }
}


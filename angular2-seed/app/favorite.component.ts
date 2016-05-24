import {Component, Input, EventEmitter, Output} from "angular2/core";


@Component({
    selector: 'favorite',
    template: `
        <i class="glyphicon"
        (click)="onClick()"
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        >
        </i>
    `,
    styles:[`
        .glyphicon-star{
            color: orange;
        }
    `]
})
export class FavoriteComponent{
    @Input('is-favorite') isFavorite=false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite=!this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
    
    
}
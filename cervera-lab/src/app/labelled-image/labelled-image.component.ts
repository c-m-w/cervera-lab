import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-labelled-image',
    templateUrl: './labelled-image.component.html',
    styleUrls: ['./labelled-image.component.css']
})
export class LabelledImageComponent {

    @Input() path!: string;
    @Input() label!: string;
}

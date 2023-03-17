import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {

    @Input() email?: string;
    @Input() link?: string;
    @Input() phone?: string;
}

import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import {
    trigger,
    transition,
    animate,
    style,
    group,
    query
} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger("routeAnimations", [
            transition("* <=> *", [
                query(":enter", [
                    style({opacity: 0, display: "block"}),
                    animate("500ms", style({opacity: 1}))
                ], {optional: true})
            ])
        ])
    ]
})
export class AppComponent {
    title = 'cervera-lab';

    constructor(private contexts: ChildrenOutletContexts,
        private router: Router) { }

    getRouteAnimationsData() {

        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}

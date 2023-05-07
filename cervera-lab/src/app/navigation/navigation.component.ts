import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
    trigger,
    transition,
    query,
    animate,
    style
} from "@angular/animations";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    animations: [
        trigger("logoEnter", [
            transition("false => true", [
                query(".logo:enter", [
                    style({opacity: 0}),
                    animate(200, style({opacity: 1}))
                ])
            ]),
            transition("true => false", [
                query(".logo:leave", [
                    style({opacity: "*"}),
                    animate(200, style({opacity: 0}))
                ])
            ])
        ])
    ]
})
export class NavigationComponent {

    sections: Array<string> = ["About us", "Our team", "Announcements", "Contact"];
    sectionLinks: Array<string> = ["about-us", "our-team", "announcements", "contact"];
    showLogo: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {

        this.checkScroll();
    }

    selectedSection(sectionIndex: number): boolean {

        return this.router.url.includes(this.sectionLinks[sectionIndex]);
    }

    sectionIcon(sectionIndex: number): string {

        return "/assets/images/" + this.sectionLinks[sectionIndex] + ".png";
    }

    @HostListener("window: scroll")
    checkScroll() {

        this.showLogo = window.scrollY >= 300;
    }
}

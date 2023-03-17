import { Component, Input } from '@angular/core';
import {
    trigger,
    transition,
    query,
    style,
    group,
    animate
} from "@angular/animations";
import timeSinceEpoch from '../timeSinceEpoch';

@Component({
    selector: 'app-large-carousel',
    templateUrl: './large-carousel.component.html',
    styleUrls: ['./large-carousel.component.css'],
    animations: [
        trigger("position", [
            transition(":increment, :decrement", [
                group([
                    query(".display:enter", [
                        style({
                            opacity: 0,
                            zIndex: "-1",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }),
                        animate("500ms", style({opacity: 1}))
                    ]),
                    query(".display:leave", [
                        style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: "-1"
                        }),
                        animate("500ms", style({opacity: 0}))
                    ])
                ])
            ])
        ])
    ]
})
export class LargeCarouselComponent {

    @Input() images!: Array<String>;
    swapDelay: number = 5000; // ms
    lastSwap: number = 0;
    position: number = 0;

    ngAfterViewInit() {

        this.lastSwap = timeSinceEpoch();
        this.poll();
    }

    poll(): void {

        if (timeSinceEpoch() - this.lastSwap >= this.swapDelay) {

            this.nextImage();
        }

        setTimeout(() => this.poll(), 500);
    }

    validateIndex(): void {

        if (this.position >= this.images.length) {
            
            this.position = 0;
        }
    }

    nextImage(): void {

        this.position = this.position + 1;
        this.validateIndex();
        this.lastSwap = timeSinceEpoch();
    }

    setImage(imageIndex: number): void {
        
        this.position = imageIndex;
        this.validateIndex();
    }
}

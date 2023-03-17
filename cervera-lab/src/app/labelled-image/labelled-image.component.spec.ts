import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelledImageComponent } from './labelled-image.component';

describe('LabelledImageComponent', () => {
    let component: LabelledImageComponent;
    let fixture: ComponentFixture<LabelledImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LabelledImageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LabelledImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

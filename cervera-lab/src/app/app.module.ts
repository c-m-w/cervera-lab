import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LargeCarouselComponent } from './large-carousel/large-carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SectionComponent } from './section/section.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { LabelledImageComponent } from './labelled-image/labelled-image.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LargeCarouselComponent,
        NavigationComponent,
        AboutUsComponent,
        SectionComponent,
        ContentBoxComponent,
        OurTeamComponent,
        LabelledImageComponent,
        ContactInfoComponent,
        AnnouncementsComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

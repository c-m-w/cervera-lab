import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ContactComponent } from './contact/contact.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
    { path: "", redirectTo: "about-us", pathMatch: "full"},
    { path: "about-us", component: AboutUsComponent, data: { animation: "AboutPage" }  },
    { path: "our-team", component: OurTeamComponent, data: { animation: "OurTeamPage" }  },
    { path: "announcements", component: AnnouncementsComponent, data: { animation: "AnnouncementsPage" }  },
    { path: "contact", component: ContactComponent, data: { animation: "ContactPage" } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

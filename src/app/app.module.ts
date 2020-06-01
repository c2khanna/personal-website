import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppComponent } from './app.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTileComponent } from './projects/project-tile/project-tile.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    WorkExComponent,
    ProjectsComponent,
    ProjectTileComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MglTimelineModule,
    BrowserAnimationsModule,
    NgsRevealModule.forRoot(),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

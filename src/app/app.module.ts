import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExYearComponent } from './work-ex/work-ex-year/work-ex-year.component';
import { WorkExPositionComponent } from './work-ex/work-ex-position/work-ex-position.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    WorkExComponent,
    ProjectsComponent,
    WorkExYearComponent,
    WorkExPositionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgsRevealModule.forRoot(),
    MglTimelineModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

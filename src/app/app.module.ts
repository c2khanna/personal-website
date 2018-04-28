import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    WorkExComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgsRevealModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

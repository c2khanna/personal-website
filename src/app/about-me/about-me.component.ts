import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {

  headingConfig: NgsRevealConfig;
  bodyConfig: NgsRevealConfig;

  constructor() {
    this.headingConfig = {reset: true, viewFactor: 0.99, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.bodyConfig = {reset: true, viewFactor: 0.5, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }

}

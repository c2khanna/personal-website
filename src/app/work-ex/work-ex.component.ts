import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-work-ex',
  templateUrl: './work-ex.component.html',
  styleUrls: ['./work-ex.component.scss']
})
export class WorkExComponent implements OnInit {

  headingConfig: NgsRevealConfig;

  constructor() {
    this.headingConfig = {reset: true, viewFactor: 0.9, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }

}

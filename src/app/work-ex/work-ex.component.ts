import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { WORK_EX_DATA } from './work-ex-data';

@Component({
  selector: 'app-work-ex',
  templateUrl: './work-ex.component.html',
  styleUrls: ['./work-ex.component.scss']
})
export class WorkExComponent implements OnInit {

  headingConfig: NgsRevealConfig;
  bodyConfig: NgsRevealConfig;
  workExData: Array<Object>;
  Object: Object;

  constructor() {
    this.Object = Object;
    this.workExData = WORK_EX_DATA;
    this.headingConfig = {reset: true, viewFactor: 0.9, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.bodyConfig = {reset: true, viewFactor: 0.15, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }
}

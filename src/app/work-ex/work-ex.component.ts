import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { WORK_EX_DATA } from './work-ex-data';
import * as moment from 'moment'
import Job from './job';

interface Entry {
  isYear: boolean,
  isExpanded: boolean
}

@Component({
  selector: 'app-work-ex',
  templateUrl: './work-ex.component.html',
  styleUrls: ['./work-ex.component.scss']
})
export class WorkExComponent implements OnInit {

  headingConfig: NgsRevealConfig;
  bodyConfig: NgsRevealConfig;
  workExData: Array<any>;

  constructor() {
    this.workExData = WORK_EX_DATA;
    this.headingConfig = {reset: true, viewFactor: 0.9, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.bodyConfig = {reset: true, viewFactor: 0.15, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }

  setupStartAndEndDate(job: Job) {
    let startDate = moment(job.startDate, "YYYY-MM-DD");
    let startAndEndDate = startDate.format('MMMM YYYY');
    startAndEndDate += ' - ';
    if(job.endDate !== '') {
      let endDate = moment(job.endDate, "YYYY-MM-DD");
      startAndEndDate += endDate.format('MMMM YYYY');
    } else {
      startAndEndDate += 'Present';
    }
    return startAndEndDate;
  }

  concatJobTech(job: Job) {
    let techString = '';
    job.technologies.forEach((item, index) => {
      techString += item;
      if(index !== job.technologies.length - 1) {
        techString += ' | ';
      }
    });
    return techString;
  }

  onExpandYear(event) {
    event.stopPropagation();
  }

  onExpandEntry(expanded, i) {
    if (!this.workExData[i].isYear){
      this.workExData[i].isExpanded = expanded;
    }
  }
}

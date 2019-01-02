import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'
import Job from './job';

@Component({
  selector: 'app-work-ex-position',
  templateUrl: './work-ex-position.component.html',
  styleUrls: ['./work-ex-position.component.scss']
})
export class WorkExPositionComponent implements OnInit {

  @Input() job: Job;
  @Input() alternate: Boolean;
  isExpanded: Boolean;
  startAndEndDate: string;
  techString: string = '';

  constructor() {
  }

  ngOnInit() {
    // set start and end date
    this.setupStartAndEndDate();

    // concat technologies into 1 line
    this.concatJobTech();
    
  }

  setupStartAndEndDate() {
    let startDate = moment(this.job.startDate, "YYYY-MM-DD");
    this.startAndEndDate = startDate.format('MMMM YYYY');
    this.startAndEndDate += ' - ';
    if(this.job.endDate !== '') {
      let endDate = moment(this.job.endDate, "YYYY-MM-DD");
      this.startAndEndDate += endDate.format('MMMM YYYY');
    } else {
      this.startAndEndDate += 'Present';
    }
  }

  concatJobTech() {
    this.job.technologies.forEach((item, index) => {
      this.techString += item;
      if(index !== this.job.technologies.length - 1) {
        this.techString += ' | ';
      }
    });
  }

  onExpandEntry(expanded) {
    this.isExpanded = expanded;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-ex-year',
  templateUrl: './work-ex-year.component.html',
  styleUrls: ['./work-ex-year.component.scss']
})
export class WorkExYearComponent implements OnInit {

  @Input() displayYear: string;

  constructor() { }

  ngOnInit() {
  }

  onExpandYear(event) {
    event.stopPropagation();
  }

}

import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work-ex-timeline-entry-side',
  templateUrl: './work-ex-timeline-entry-side.component.html',
  styleUrls: ['./work-ex-timeline-entry-side.component.scss']
})
export class WorkExTimelineEntrySideComponent {

  set alternate(value) {
    this.elementRef.nativeElement.classList.toggle('alternate', value);
  }

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
  }

  constructor(private elementRef: ElementRef) { }

}

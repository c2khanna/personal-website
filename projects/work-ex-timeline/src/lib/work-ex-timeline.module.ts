import { NgModule } from '@angular/core';
import { WorkExTimelineComponent } from './work-ex-timeline/work-ex-timeline.component';
import { WorkExTimelineEntryComponent } from './work-ex-timeline-entry/work-ex-timeline-entry.component';
import { WorkExTimelineEntryContentComponent } from './work-ex-timeline-entry-content/work-ex-timeline-entry-content.component';
import { WorkExTimelineEntryDotComponent } from './work-ex-timeline-entry-dot/work-ex-timeline-entry-dot.component';
import { WorkExTimelineEntryHeaderComponent } from './work-ex-timeline-entry-header/work-ex-timeline-entry-header.component';
import { WorkExTimelineEntrySideComponent } from './work-ex-timeline-entry-side/work-ex-timeline-entry-side.component';

@NgModule({
  declarations: [
    WorkExTimelineComponent,
    WorkExTimelineEntryComponent,
    WorkExTimelineEntryContentComponent,
    WorkExTimelineEntryDotComponent,
    WorkExTimelineEntryHeaderComponent,
    WorkExTimelineEntrySideComponent
  ],
  imports: [
  ],
  exports: [
    WorkExTimelineComponent,
    WorkExTimelineEntryComponent,
    WorkExTimelineEntryContentComponent,
    WorkExTimelineEntryDotComponent,
    WorkExTimelineEntryHeaderComponent,
    WorkExTimelineEntrySideComponent
  ]
})
export class WorkExTimelineModule { }

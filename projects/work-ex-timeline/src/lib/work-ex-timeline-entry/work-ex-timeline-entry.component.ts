import {HostBinding} from '@angular/core';
import { WorkExTimelineEntrySideComponent } from './../work-ex-timeline-entry-side/work-ex-timeline-entry-side.component';
import { Subscription } from 'rxjs/Subscription';
import { WorkExTimelineEntryDotComponent } from './../work-ex-timeline-entry-dot/work-ex-timeline-entry-dot.component';
import {
  Component, AfterViewInit, Output, EventEmitter, ContentChild, OnDestroy, ElementRef
} from '@angular/core';
import { WorkExTimelineEntryContentComponent } from '../work-ex-timeline-entry-content/work-ex-timeline-entry-content.component';
import { WorkExTimelineEntryHeaderComponent } from '../work-ex-timeline-entry-header/work-ex-timeline-entry-header.component';

@Component({
  selector: 'app-work-ex-timeline-entry',
  templateUrl: './work-ex-timeline-entry.component.html',
  styleUrls: ['./work-ex-timeline-entry.component.scss']
})
export class WorkExTimelineEntryComponent implements AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  focusOnOpen: boolean = false;

  set expanded(expanded) {
    if (this.dot && expanded) {
      this.dot.expanded = expanded;
    } else {
      this.content.expanded = expanded
    }
    this.changed.emit(expanded);
  }

  @HostBinding('class.expanded')
  get expanded() {
    return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
  }

  private _mobile: boolean = false;

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
    if (this.dot) {
      this.dot.mobile = value;
    }
    if (this.side) {
      this.side.mobile = value;
    }
  }

  @Output('expand')
  changed = new EventEmitter<boolean>();

  @Output()
  animationDone = new EventEmitter<string>();

  @ContentChild(WorkExTimelineEntryContentComponent) content: WorkExTimelineEntryContentComponent;
  @ContentChild(WorkExTimelineEntryHeaderComponent) header: WorkExTimelineEntryHeaderComponent;
  @ContentChild(WorkExTimelineEntryDotComponent) dot: WorkExTimelineEntryDotComponent;
  @ContentChild(WorkExTimelineEntrySideComponent) side: WorkExTimelineEntrySideComponent;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    if (this.dot) {
      this.subscriptions.push(this.dot.animationDone.subscribe(event => {
        if (event.toState === 'expanded') {
          this.content.expanded = true;
        } else {
          this.animationDone.emit(event);
        }
      }));
    }
    if (this.content) {
      this.subscriptions.push(this.content.animationDone.subscribe(event => {
        if (this.dot && event.toState === 'collapsed') {
          this.dot.expanded = false;
        } else {
          if (this.focusOnOpen) {
            this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          this.animationDone.emit(event);
        }
      }));
    }
  }

  set alternate(value: boolean) {
    console.log('alternate set to', value);
    this.elementRef.nativeElement.classList.toggle('alternate', value);
    if (this.dot) {
      this.dot.alternate = value;
    }
    if (this.side) {
      this.side.alternate = value;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  collapse() {
    this.expanded = false;
  }

  expand() {
    this.expanded = true;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}

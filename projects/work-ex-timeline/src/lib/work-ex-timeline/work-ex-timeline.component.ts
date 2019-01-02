import { QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WorkExTimelineEntryComponent } from '../work-ex-timeline-entry/work-ex-timeline-entry.component';
import { Component, Input, ContentChildren, AfterViewInit, EventEmitter, Output, HostListener, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'enl-work-ex-timeline',
  templateUrl: './work-ex-timeline.component.html',
  styleUrls: ['./work-ex-timeline.component.scss']
})
export class WorkExTimelineComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  toggle: boolean = true;

  @Input()
  alternate: boolean = true;

  set mobile(value: boolean) {
    this.content && this.content.forEach(entry => entry.mobile = value);
    this.elementRef.nativeElement.classList.toggle('mobile', value)
  }

  get mobile() {
    return this.elementRef.nativeElement.classList.contains('mobile');
  }

  private _focusOnOpen = false;

  @Input()
  set focusOnOpen(focusOnOpen) {
    this.content && this.content.forEach(entry => entry.focusOnOpen = focusOnOpen);
    this._focusOnOpen = focusOnOpen;
  }

  get focusOnOpen() {
    return this._focusOnOpen;
  }

  private subscriptions: Subscription[] = [];

  @ContentChildren(WorkExTimelineEntryComponent)
  private content: QueryList<WorkExTimelineEntryComponent>;

  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges(simpleChanges) {
    this.updateContent();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit() {
    this.mobile = this.elementRef.nativeElement.clientWidth < 640;
    setTimeout(() => this.updateContent());
    this.content.changes.subscribe(changes => {
      this.updateContent();
    });
  }

  private updateContent() {
    this.ngOnDestroy();
    if (this.content) {
      this.content.forEach((entry, index) => {
        if (this.toggle) {
          this.subscriptions.push(
            entry.changed.subscribe(state => {
              if (state === true) {
                this.content.filter(e => e !== entry).forEach(e => e.collapse());
              }
            }));
        }
        entry.alternate = this.alternate ? index % 2 !== 0 : false;
        entry.mobile = this.mobile;
        entry.focusOnOpen = this.focusOnOpen;
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(ev: KeyboardEvent) {
    this.mobile = this.elementRef.nativeElement.clientWidth < 640;
  }
}

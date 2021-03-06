import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'scale(1, 1)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'scale(0, 0)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})

export class NavBarComponent implements OnInit {

  state = 'hide';

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= 115) {
        this.state = 'show';
      } else {
        this.state = 'hide';
      }
    }

}

import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'], 
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "scale(1, 1)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "scale(0, 0)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})

export class NavBarComponent implements OnInit {

  col1Config: NgsRevealConfig;
  state = 'hide'

  constructor(public el: ElementRef) { 
  	this.col1Config = {reset:true};
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition + 40) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }
    }

}

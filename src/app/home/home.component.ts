import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameConfig: NgsRevealConfig;

  constructor() {
    this.nameConfig = {reset: true, viewFactor: 0.8, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  bodyConfig: NgsRevealConfig;

  constructor() { 
  	this.bodyConfig = {reset:true, viewFactor: 0.3};
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  col1Config: NgsRevealConfig;

  constructor() { 
	this.col1Config = {reset:true, viewFactor: 0.999};
  }

  ngOnInit() {
  }

}

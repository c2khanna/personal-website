import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  headingConfig: NgsRevealConfig;

  constructor() { 
  	this.headingConfig = {reset:true, viewFactor: 0.9};
  }

  ngOnInit() {
  }

}

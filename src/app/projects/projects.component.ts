import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { PROJECTS } from './projects-data';
import Project from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  headingConfig: NgsRevealConfig;
  bodyConfig: NgsRevealConfig;
  projects: Array<Project>;

  constructor() {
    this.headingConfig = {reset: true, viewFactor: 0.9, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.bodyConfig = {reset: true, viewFactor: 0.1, viewOffset: {top: 56, right: 0, bottom: 0, left: 0}};
    this.projects = PROJECTS;
  }

  ngOnInit() {
    console.log('projs ', this.projects);
  }

}

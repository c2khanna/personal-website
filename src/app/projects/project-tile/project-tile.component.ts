import { Component, OnInit, Input } from '@angular/core';
import Project from '../project';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  getTechnologiesList() {
    let returnString = '';
    for(let i = 0; i < this.project.technologies.length - 1; i++) {
      returnString += this.project.technologies[i];
      if(i < this.project.technologies.length - 2){ 
        returnString += ' | ';
      }
    }
    return returnString;
  }
}

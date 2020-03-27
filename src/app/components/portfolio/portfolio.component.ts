import { Component, OnInit } from '@angular/core';
import {ProjectsModel} from '../../../models/projects.model';
import {projects} from './projects-list';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  data: ProjectsModel[] = projects;
  currentItemIndex: number;
  faArrow = faArrowAltCircleRight;

  constructor() { }

  ngOnInit() {
    this.currentItemIndex = 0;
  }

  showNext() {
    if (this.currentItemIndex >= this.data.length - 1) {
      this.currentItemIndex = 0;
    } else {
      this.currentItemIndex++;
    }

  }
}

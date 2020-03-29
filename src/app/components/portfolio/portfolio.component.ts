import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  private executed = false;

  @ViewChild('container', {static: true})
  container: ElementRef;

  constructor() { }

  ngOnInit() {
    this.currentItemIndex = 0;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true && this.executed === false) {
        setTimeout(() => {
          this.container.nativeElement.classList.add('animated', 'fadeInDown');
          this.container.nativeElement.classList.add('show');
          this.executed = true;
        }, 70);

      }
    }, { threshold: [0.11] });

    observer.observe(this.container.nativeElement);

  }

  showNext() {
    if (this.currentItemIndex >= this.data.length - 1) {
      this.currentItemIndex = 0;
    } else {
      this.currentItemIndex++;
    }

  }
}

import {AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {faHardHat, faMagic, faPencilRuler, faTruckLoading} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-points',
  templateUrl: './main-points.component.html',
  styleUrls: ['./main-points.component.scss']
})
export class MainPointsComponent implements AfterViewInit {
  public executed = false;
  public observer: IntersectionObserver;
  public icons = [faPencilRuler, faMagic, faTruckLoading, faHardHat];
  public titles = ['Планираме', 'Изработваме', 'Транспортираме', 'Монтираме'];
  public paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  ];

  @ViewChildren('points', {read: ElementRef})
  points: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.points.forEach((point, index) => {
      setTimeout(() => {
        this.observer.observe(point.nativeElement);
      },  425 * index);
    });

    this.observer = new IntersectionObserver((entries) => {
      if (!this.executed) {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting === true) {
            this.renderer.addClass(entry.target, 'animated');
            this.renderer.addClass(entry.target, 'fadeInUp');
            this.renderer.addClass(entry.target, 'show');
          }
        });
      }
    }, {threshold: [0.15]});
  }
}

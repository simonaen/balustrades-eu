import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-main-points',
  templateUrl: './main-points.component.html',
  styleUrls: ['./main-points.component.scss']
})
export class MainPointsComponent implements AfterViewInit {
  public executed = false;
  public observer: IntersectionObserver;

  @ViewChild('bg', {static: true})
  background: ElementRef;

  @ViewChildren('points', {read: ElementRef})
  points: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.points.reset([this.background, ...this.points.toArray()]);

    this.points.forEach((point, index) => {
      setTimeout(() => {
        this.observer.observe(point.nativeElement);
      },  500 * index);
    });

    this.observer = new IntersectionObserver((entries) => {
      if (!this.executed) {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting === true) {
            this.renderer.addClass(entry.target, 'animated');
            this.renderer.addClass(entry.target, 'fadeInDown');
            this.renderer.addClass(entry.target, 'show');
          }
        });
      }
    }, {threshold: [0.15]});
  }
}

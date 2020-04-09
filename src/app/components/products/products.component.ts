import {AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  private executed = false;
  public observer: IntersectionObserver;

  public images = ['/assets/mission_banner.png', '/assets/mission_banner.png',
    '/assets/mission_banner.png', '/assets/mission_banner.png', '/assets/mission_banner.png'];
  public titles = ['Модел 1', 'Модел 2', 'Модел 3', 'Модел 4', 'Модел 5'];
  public descrp = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  ];

  @ViewChildren('product')
  items: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (!this.executed) {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting === true) {
              this.renderer.addClass(entry.target, 'animated');
              this.renderer.addClass(entry.target, 'slideInUp');
              this.renderer.addClass(entry.target, 'show');
          }
        });
      }
    }, {threshold: [0.15]});

    this.items.forEach((item, index) => {
      setTimeout(() => {
        this.observer.observe(item.nativeElement);
      }, 450 * index);
    });
  }

}

import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  private executed = false;
  public observer: IntersectionObserver;

  @ViewChildren('img')
  items: QueryList<ElementRef>;

  @ViewChild('text', {static: true})
  text: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.items.reset([...this.items.toArray(), this.text]);

    this.observer = new IntersectionObserver((entries) => {
      if (!this.executed) {
        entries.forEach((entry: any) => {
          console.log(entry);
          if (entry.isIntersecting === true) {
            if (entry.target.id === 'text') {
              this.renderer.addClass(entry.target, 'animated');
              this.renderer.addClass(entry.target, 'slideInLeft');
              this.renderer.addClass(entry.target, 'show');
            } else {
              this.renderer.addClass(entry.target, 'animated');
              this.renderer.addClass(entry.target, 'fadeIn');
              this.renderer.addClass(entry.target, 'show');
            }
          }
        });
      }
    }, {threshold: [0.11]});

    this.items.forEach((item, index) => {
      setTimeout(() => {
        this.observer.observe(item.nativeElement);
      }, 350 * index);
    });

    setTimeout(() => {
      this.renderer.removeClass(this.text.nativeElement, 'animated');
      this.renderer.removeClass(this.text.nativeElement, 'slideInLeft');
    }, 2500);
  }

}

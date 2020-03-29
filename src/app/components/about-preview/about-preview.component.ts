import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-preview',
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.scss']
})
export class AboutPreviewComponent implements OnInit {
  yearsExperience = new Date().getFullYear().valueOf() - 1996;
  executed = false;

  @ViewChild('years', {static: true})
  years: ElementRef;

  @ViewChild('container', {static: true})
  container: ElementRef;

  constructor() { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true && this.executed === false) {
        setTimeout(() => {
          this.yearsCounter(0, this.yearsExperience, 2000);
          this.container.nativeElement.classList.add('animated', 'fadeInDown');
          this.container.nativeElement.classList.add('show');
          this.executed = true;
        }, 70);

      }
    }, { threshold: [0.11] });

    observer.observe(document.querySelector('#aboutPreviewContainer'));
  }

  yearsCounter(start, end, duration) {
    const obj = this.years.nativeElement;
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languages = [
    {value: 1, name: 'Български'},
    {value: 2, name: 'English'},
    {value: 3, name: 'Français'},
    {value: 4, name: 'Русский'},
    {value: 5, name: 'Deutsch'},
    {value: 6, name: 'Italiano'}];

  @ViewChild('container', {static: true})
  container: ElementRef;

  constructor() { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        setTimeout(() => {
          this.container.nativeElement.classList.add('animated', 'fadeInDown');
          this.container.nativeElement.classList.add('show');
        }, 70);

      }
    }, { threshold: [0.11] });
    setTimeout(() => {
      observer.observe(this.container.nativeElement);
    },  400);
  }

}

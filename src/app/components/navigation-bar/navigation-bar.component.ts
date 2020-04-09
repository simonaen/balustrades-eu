import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  stickTop: boolean;
  pulse = true;
  interval;

  @ViewChild('button', {static: true})
  button;

  @HostListener('window:scroll')
  onScroll() {
    this.stickTop = window.scrollY.valueOf() >= (window.innerHeight.valueOf() * 0.05);
  }

  constructor() {
    this.interval = setInterval(() => {
      this.pulse = false;
      setTimeout(() => {
        this.pulse = true;
      }, 2500);
    }, 4000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

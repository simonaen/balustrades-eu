import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  public stickTop: boolean;
  public pulse = true;
  public interval;
  public isSmallScreen: boolean;
  public mobileNavItems = ['Начало', 'За нас', 'Услуги', 'Модели', 'Проекти', 'Контакти'];
  public mobileNavRefs = ['#landing', '#about', '#services', '#catalog', '#portfolio', '#contact'];

  @ViewChild('button', {static: true})
  button;

  @HostListener('window:scroll')
  onScroll() {
    this.stickTop = window.scrollY.valueOf() >= (window.innerHeight.valueOf() * 0.05);
  }

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
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

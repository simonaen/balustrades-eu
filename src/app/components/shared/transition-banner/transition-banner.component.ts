import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transition-banner',
  templateUrl: './transition-banner.component.html',
  styleUrls: ['./transition-banner.component.scss']
})
export class TransitionBannerComponent implements OnInit {
  @Input()
  bgImage: string;

  @Input()
  title: string;

  @Input()
  paragraph: string;

  constructor() { }

  ngOnInit() {
  }

}

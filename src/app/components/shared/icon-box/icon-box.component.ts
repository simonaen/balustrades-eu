import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss']
})
export class IconBoxComponent implements OnInit {
  @Input()
  icon;

  @Input()
  title: string;

  @Input()
  paragraph: string;

  @Input()
  offsetIcon: boolean;

  constructor() { }

  ngOnInit() {
  }

}

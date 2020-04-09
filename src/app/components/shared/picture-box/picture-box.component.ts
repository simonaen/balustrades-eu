import {Component, Input, OnInit} from '@angular/core';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-picture-box',
  templateUrl: './picture-box.component.html',
  styleUrls: ['./picture-box.component.scss']
})
export class PictureBoxComponent implements OnInit {
  public faArrow = faLongArrowAltRight;
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

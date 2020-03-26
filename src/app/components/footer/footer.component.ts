import {Component, OnInit} from '@angular/core';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookSquare;

  constructor() {
  }

  ngOnInit() {
  }

}

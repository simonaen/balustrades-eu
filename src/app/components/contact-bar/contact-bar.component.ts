import { Component, OnInit } from '@angular/core';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-bar',
  templateUrl: './contact-bar.component.html',
  styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent implements OnInit {
  public faEnvelope = faEnvelope;
  public faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}

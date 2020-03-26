import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-preview',
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.scss']
})
export class AboutPreviewComponent implements OnInit {
  yearsExperience = new Date().getFullYear().valueOf() - 1996;
  constructor() { }

  ngOnInit() {
  }

}

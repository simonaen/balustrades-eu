import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}

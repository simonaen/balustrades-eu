import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  constructor() { }
  @ViewChild('select', {static: false})
  select: HTMLSelectElement;

  @Input()
  data: Array<DropdownModel>;

  onChange() {
    // Change localization
  }

  ngOnInit() {
  }

}

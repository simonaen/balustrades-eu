import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {ButtonComponent} from './button/button.component';

const components = [
  DropdownComponent,
  ButtonComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule { }

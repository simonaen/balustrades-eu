import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {ContactBarComponent} from '../contact-bar/contact-bar.component';
import {SharedModule} from '../shared/shared.module';
import {NavigationBarModule} from '../navigation-bar/navigation-bar.module';

const components = [
  HeaderComponent,
  ContactBarComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    SharedModule,
    NavigationBarModule
  ],
  exports: components
})
export class HeaderModule { }

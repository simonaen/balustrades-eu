import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {ButtonComponent} from './button/button.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {IconBoxComponent} from './icon-box/icon-box.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PictureBoxComponent} from './picture-box/picture-box.component';
import {TransitionBannerComponent} from './transition-banner/transition-banner.component';

const components = [
  DropdownComponent,
  ButtonComponent,
  ContactFormComponent,
  IconBoxComponent,
  PictureBoxComponent,
  TransitionBannerComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: components,
})
export class SharedModule { }

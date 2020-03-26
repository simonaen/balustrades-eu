import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {ButtonComponent} from './button/button.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InquiryPreviewComponent} from '../modals/inquiry-preview/inquiry-preview.component';
import {QuoteModalComponent} from '../modals/quote-modal/quote-modal.component';
import {MatDialogModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserModule} from '@angular/platform-browser';
import {ModalsModule} from '../modals/modals.module';

const components = [
  DropdownComponent,
  ButtonComponent,
  ContactFormComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: components,
})
export class SharedModule { }

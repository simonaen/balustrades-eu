import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuoteModalComponent} from './quote-modal/quote-modal.component';
import {InquiryPreviewComponent} from './inquiry-preview/inquiry-preview.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';

const components = [
  InquiryPreviewComponent,
  QuoteModalComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    SharedModule
  ],
  entryComponents: [
    QuoteModalComponent,
    InquiryPreviewComponent
  ],
  exports: [components]
})
export class ModalsModule { }

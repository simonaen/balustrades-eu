import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }

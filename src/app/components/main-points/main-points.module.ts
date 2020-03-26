import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPointsComponent} from './main-points.component';

@NgModule({
  declarations: [MainPointsComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPointsComponent]
})
export class MainPointsModule { }

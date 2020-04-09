import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPointsComponent} from './main-points.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainPointsComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [MainPointsComponent]
})
export class MainPointsModule { }

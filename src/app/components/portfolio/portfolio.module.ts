import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {CarouselModule, WavesModule} from 'angular-bootstrap-md';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const components = [
  PortfolioComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselModule.forRoot(),
    WavesModule.forRoot()
  ],
  exports: [components]
})
export class PortfolioModule { }

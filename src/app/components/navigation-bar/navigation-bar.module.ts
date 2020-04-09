import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule {
}

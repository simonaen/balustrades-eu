import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalsModule} from './components/modals/modals.module';
import {MainPointsModule} from './components/main-points/main-points.module';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPreviewComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    ModalsModule,
    MainPointsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

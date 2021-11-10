import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideNavegatorComponent } from './slide-navegator/slide-navegator.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideNavegatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

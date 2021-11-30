import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SlideNavegatorComponent } from './slide-navegator/slide-navegator.component';
import { StockExchangeDashboardComponent } from './stock-exchange-dashboard/stock-exchange-dashboard.component';
import { Configuration } from 'src/constants/configurations';


@NgModule({
  declarations: [
    AppComponent,
    SlideNavegatorComponent,
    StockExchangeDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

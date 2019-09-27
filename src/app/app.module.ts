import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from  './material/material.module';
import { WeatherComponent } from './weather/weather.component';
import { ChartsModule } from 'ng2-charts';
import { DeferLoadModule } from './defer-load/defer-load.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    DeferLoadModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

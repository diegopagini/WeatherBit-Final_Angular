import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { WeatherInfoComponent } from './public/weather-info/weather-info.component';
import { SearchCityComponent } from './public/weather-info/search-city/search-city.component';
import { WeatherDataComponent } from './public/weather-info/weather-data/weather-data.component';
import { ViewNewsComponent } from './public/weather-info/view-news/view-news.component';
import { FooterComponent } from './public/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherInfoComponent,
    SearchCityComponent,
    WeatherDataComponent,
    ViewNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

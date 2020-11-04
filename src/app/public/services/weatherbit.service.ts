import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherCurrentResponse } from '../interfaces/weather-current-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherbitService {
  key = '9eec655c6fd34430a775dd9fd71dd384';
  baseLink = 'https://api.weatherbit.io/v2.0/current';

  constructor(public http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getCurrentWeather(city): Observable<WeatherCurrentResponse> {
    return this.http.get<WeatherCurrentResponse>(`${this.baseLink}?city=${city}&key=${this.key}`);
  }
}

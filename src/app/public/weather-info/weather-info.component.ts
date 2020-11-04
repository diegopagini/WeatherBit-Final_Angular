import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  searchingCity: string;
  codigoPostalDesdeElPadre = '1234';
  currentTemp: number;

  constructor() { }

  ngOnInit(): void {
  }

  cityStringEmiting(cityString: string) {
    console.log('el serch emitio ', cityString)
    this.searchingCity = cityString;
  }

  emitingTemp(temp: number) {
    this.currentTemp= temp;
  }

}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  WeatherCity,
  WeatherCurrentResponse,
} from '../../interfaces/weather-current-response.interface';
import { WeatherbitService } from '../../services/weatherbit.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit {
  @Input() newCity: string;
  @Input() codigoPostal: string;
  @Output() emitTemp = new EventEmitter();

  currentData: WeatherCity;

  constructor(public weatherbitService: WeatherbitService) {}

  ngOnInit(): void {
    this.getCity();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newCity.currentValue) {
      this.getCity(changes.newCity.currentValue);
    }
  }

  getCity(city = 'Mar del Plata') {
    this.weatherbitService
      .getCurrentWeather(city)
      .subscribe((res: WeatherCurrentResponse) => {
        if (res.data === undefined) {
          return true;
        }

        this.currentData = res.data[0];

        this.emitTemp.emit(this.currentData.app_temp);
      });
  }
}

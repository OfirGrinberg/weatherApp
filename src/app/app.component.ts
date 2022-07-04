import { Component } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { faWater, faWind, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeatherApp';

  cityName!: string;
  weatherData!: WeatherData;
  gray: string = 'rgba(128, 128, 128, 0.6)';
  blue: string = 'rgba(100, 148, 237, 0.7)';
  faWind = faWind;
  faWater = faWater;
  faTemperatureHigh = faTemperatureHigh;
  private observer = {
    next: (response: WeatherData) => {
      this.weatherData = response;
      return this.weatherData;
    },
    error: (err: { error: { message: string } }) => alert(err.error.message),
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cityName = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.split('/')[1];
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(this.observer);
  }
}

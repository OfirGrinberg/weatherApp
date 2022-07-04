import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const url: string = environment.apiBaseUrl;
    const options: object = {
      headers: new HttpHeaders()
        .set(environment.apiHostName, environment.apiHostvalue)
        .set(environment.apiKeyName, environment.apiKeyvalue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    };
    return this.http.get(url, options);
  }
}

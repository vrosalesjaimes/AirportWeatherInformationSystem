import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from 'src/app/interface/weather-data';

@Injectable({
  providedIn: 'root'
})
export class OpenWheaterMapService {
  private apiKey: string = environment.openWeatherMapApiKey;
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeatherByCoordinates(latitude: string, longitude: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('exclude', 'minutely,hourly,daily')
      .set('appid', this.apiKey);

    return this.http.get<WeatherData>(this.baseUrl, { params });
  }
}

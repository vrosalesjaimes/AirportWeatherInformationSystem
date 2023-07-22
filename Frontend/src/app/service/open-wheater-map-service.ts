import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OpenWheaterMapService {
  private apiKey: string = environment.openWeatherMapApiKey;
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeatherByCoordinates(latitude: string, longitude: string): Observable<any> {
    const params = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('exclude', 'minutely,hourly,daily')
      .set('appid', this.apiKey);

    return this.http.get<any>(this.baseUrl, { params });
  }
}

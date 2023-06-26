import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'sua api';
  private lang = 'pt_br';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('lang',this.lang);

    return this.http.get(apiUrl, { params });
  }
}

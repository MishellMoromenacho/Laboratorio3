import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'dddbdcfa38fc4f6a906130651048128b';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { }

  getWeather(city: string): Promise<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching weather data');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
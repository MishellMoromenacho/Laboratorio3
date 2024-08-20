import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-climate-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './climate-info.component.html',
  styleUrls: ['./climate-info.component.css']
})
export class ClimateInfoComponent {
  weatherData: any;
  province: string = '';

  constructor(private weatherService: WeatherService) {}

  fetchWeather(): void {
    this.weatherService.getWeather(this.province)
      .then(data => {
        this.weatherData = data;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
}
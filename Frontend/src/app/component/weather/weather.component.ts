import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/objects/airport';
import { DataSharingService } from 'src/app/service/data-sharing.service';
import { OpenWheaterMapService } from 'src/app/service/open-wheater-map-service';
import { WeatherData } from 'src/app/interface/weather-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  protected originWeather!: WeatherData;
  protected destinationWeather!: WeatherData;
  protected originAirport!: Airport;
  protected destinationAirport!: Airport;

  constructor(private dataSharingService: DataSharingService,
              private weatherService: OpenWheaterMapService){};

  ngOnInit(): void {
    const receivedData: Airport[] = this.dataSharingService.getSharedData();
    this.originAirport = receivedData[0];
    this.destinationAirport = receivedData[1];
    this.getWeather(this.originAirport, this.destinationAirport);
  }

  getWeather(originAirport: Airport, destinationAirport: Airport){
    this.weatherService.getWeatherByCoordinates(originAirport.latitude, originAirport.longitude).subscribe({
      next: data => {
        this.originWeather = data;
      }
    });
    this.weatherService.getWeatherByCoordinates(destinationAirport.latitude, destinationAirport.longitude).subscribe({
      next: data => {
        this.destinationWeather = data;
      }
    });
  }
}

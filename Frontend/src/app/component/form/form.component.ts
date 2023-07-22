import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from 'src/app/objects/airport';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() title!: string;
  @Output() resultEmitter = new EventEmitter<Airport>();

  countries: string[] = [];
  cities: string[] = [];
  airports: string[] = [];

  isAirportSelected = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.http.get<string[]>('http://localhost:8080/airports/all-cities')
      .subscribe(data => {
        this.countries = data;
      });
  }

  getCitiesByCountry(country: string) {
    this.http.get<string[]>('http://localhost:8080/airports/by-country', { params: { country: country } })
      .subscribe(data => {
        this.cities = data;
        this.airports = [];
      });
  }

  getAirportsByCity(city: string) {
    this.http.get<string[]>('http://localhost:8080/airports/by-city', { params: { city: city } })
      .subscribe(data => {
        this.airports = data;
      });
  }

  getInfoAirport(name:string) {
    this.http.get<Airport>('http://localhost:8080/airports/search', { params: { name: name } })
      .subscribe({
        next: (response) => {
          this.resultEmitter.emit(response);
        },
        error: (error) => {
          console.error('Error searching airport:', error);
        }
      });
  }

  checkStatus(){
    if(this.isAirportSelected){
      return true;
    }
    return false;
  }
  
}
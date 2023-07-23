import { Injectable } from '@angular/core';
import { Airport } from '../objects/airport';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedData!: Airport;

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData(): any {
    return this.sharedData;
  }
}

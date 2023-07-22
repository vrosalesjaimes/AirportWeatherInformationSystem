import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedData!: any;

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData(): any {
    return this.sharedData;
  }
}

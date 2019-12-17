import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }

  getGeoCode(address: any) {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAJlmRvWUjUBhStXEgN1R0XhfJSXlqp3HI`;
    return this.http.get(apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(private http: HttpClient) { }

  getDirections(origin: any, destination: any) {
    const apiUrl = `secured/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyAJlmRvWUjUBhStXEgN1R0XhfJSXlqp3HI`;
    return this.http.get(apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor(private http: HttpClient) { }

  getDistance(origins: any, destinations: any) {
    const apiUrl = `secured/maps/api/distancematrix/json?units=imperial&origins=${origins}&destinations=${destinations}&key=AIzaSyAJlmRvWUjUBhStXEgN1R0XhfJSXlqp3HI`;
    return this.http.get(apiUrl);
  }
}

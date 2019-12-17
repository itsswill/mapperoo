import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: HttpClient) { }

  getTimeZone() {
    const apiUrl = `secured/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyCWhcRrk170fjNBxsv_Q6VCkn02Aa8QAk0`;
    return this.http.get(apiUrl);
  }
}

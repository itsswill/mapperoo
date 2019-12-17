import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getPlace(input: string, inputType: any) {
    const apiUrl = `secured/maps/api/place/findplacefromtext/json?key=AIzaSyCWhcRrk170fjNBxsv_Q6VCkn02Aa8QAk0&${input}&${inputType}`;
    return this.http.get(apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  key: string;
  constructor(private http: HttpClient) {
    this.key = 'AIzaSyAJlmRvWUjUBhStXEgN1R0XhfJSXlqp3HI';
  }

  getPlaces(input: string, inputType: string) {
    const apiUrl = `secured/maps/api/place/findplacefromtext/json?&key=${this.key}&input=${input}&inputtype=${inputType}`;
    return this.http.get(apiUrl);
  }
}

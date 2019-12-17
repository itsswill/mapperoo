import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../services/geocode/geocode.service';

@Component({
  selector: 'app-geocode',
  templateUrl: './geocode.component.html',
  styleUrls: ['./geocode.component.scss']
})
export class GeocodeComponent implements OnInit {

  constructor(private geoCodeServ: GeocodeService) { }

  ngOnInit() {
    this.geoCodeServ.getGeoCode('24 lenox avenue, hicksville, ny').subscribe(this.onceCodeReceived);
  }

  onceCodeReceived(res: any) {
    console.log(res);
  }
}

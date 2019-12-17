import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  latitude = 40.748817;
  longitude = -73.985428;
  mapType = 'roadmap';
  zoom = 14;

  constructor(private mapsServ: MapsService) { }

  ngOnInit() {
    this.mapsServ.getPlace('target', 'textQuery').subscribe(this.oncePlaceReceived);
  }

  oncePlaceReceived(res: any) {
    console.log(res);
  }
}

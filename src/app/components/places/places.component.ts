import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor(private placesServ: PlacesService) { }

  ngOnInit() {
    this.placesServ.getPlaces('disneyworld', 'textquery').subscribe(this.oncePlaceReceived);
  }

  oncePlaceReceived(res: any) {
    console.log(res);
  }

}

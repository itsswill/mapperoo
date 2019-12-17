import { Component, OnInit } from '@angular/core';
import { DirectionsService } from '../../services/directions/directions.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  constructor(private directionsServ: DirectionsService) { }

  ngOnInit() {
    this.directionsServ.getDirections('24 lenox avenue, Hicksville, New york, 11801', 'disneyland').subscribe(this.onceDirectionsReceived);
  }

  onceDirectionsReceived(res: any) {
    console.log(res);
  }

}

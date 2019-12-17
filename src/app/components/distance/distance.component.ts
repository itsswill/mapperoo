import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../../services/distance/distance.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  constructor(private distanceServ: DistanceService) { }

  ngOnInit() {
    this.distanceServ.getDistance('Washington, DC', 'New York City, NY').subscribe(this.onceDistanceReceived);
  }

  /**
   * handles what to do once distance is received!
   * @param res ...is the results
   */
  onceDistanceReceived(res: any) {
    console.log(res);
  }

}

import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../../services/timezone/timezone.service';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit {

  constructor(private timeZoneServ: TimezoneService) { }

  ngOnInit() {
    this.timeZoneServ.getTimeZone().subscribe(this.onceTimeZoneReceived);
  }

  onceTimeZoneReceived(res: any) {
    console.log(res);
  }
}

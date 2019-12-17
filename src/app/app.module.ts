import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { TimezoneComponent } from './components/timezone/timezone.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { GeocodeComponent } from './components/geocode/geocode.component';
import { DistanceComponent } from './components/distance/distance.component';
import { PlacesComponent } from './components/places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    TimezoneComponent,
    DirectionsComponent,
    GeocodeComponent,
    DistanceComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJlmRvWUjUBhStXEgN1R0XhfJSXlqp3HI'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';

import '@here/maps-api-for-javascript';
import { RoutesService } from '../../services/routes.service';
import { API_KEY } from '../../../credentials';

@Component({
  selector: 'app-here-maps',
  imports: [],
  providers: [RoutesService],
  templateUrl: './here-maps.component.html',
  styleUrl: './here-maps.component.css',
  standalone: true
})
export class HereMapsComponent implements AfterViewInit {
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  service = inject(RoutesService);
  
  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      const platform = new H.service.Platform({
        apikey: API_KEY
      });
      const layers = platform.createDefaultLayers();
      this.map = new H.Map(
        this.mapDiv.nativeElement,
        (layers as any).vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 52.5, lng: 13.4},
          zoom: 13,
        }
      );
      window.addEventListener('resize', () => (this.map as H.Map).getViewPort().resize());

      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

      this.service.getRoute().subscribe((routeData: any) => {
        console.log(routeData)
        routeData.routes.forEach((element: any) => {
          element.sections.forEach((section: any) => {
            const lineString = H.geo.LineString.fromFlexiblePolyline(section.polyline);
            const polyline = new H.map.Polyline(lineString, {
              data: {},
              style: {
                lineWidth: 4,
                strokeColor: 'rgba(255, 0, 13, 0.7)'
              }
            });
            this.map!.addObject(polyline);
          });
        })
        /*var lineString = new H.geo.LineString();

        lineString.pushPoint({ lat: 53.3477, lng: -6.2597 });
        lineString.pushPoint({ lat: 51.5008, lng: -0.1224 });
        lineString.pushPoint({ lat: 48.8567, lng: 2.3508 });
        lineString.pushPoint({ lat: 52.5166, lng: 13.3833 });
      
        (this.map as H.Map).addObject(new H.map.Polyline(lineString, {data: { style: { lineWidth: 4 } }}));*/
      });
    }
  }
}

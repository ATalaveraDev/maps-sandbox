import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import '@here/maps-api-for-javascript';

@Component({
  selector: 'app-here-maps',
  imports: [],
  templateUrl: './here-maps.component.html',
  styleUrl: './here-maps.component.css',
  standalone: true
})
export class HereMapsComponent implements AfterViewInit {
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;
  
  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      const platform = new H.service.Platform({
        apikey: ''
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
    }
  }
}

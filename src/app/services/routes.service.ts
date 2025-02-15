import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RoutesService {
    constructor(private httpClient: HttpClient) { }
    
    getRoute() {
        return this.httpClient.get('https://router.hereapi.com/v8/routes?apiKey=&transportMode=car&origin=52.5308,13.3847&destination=52.5323,13.3789&return=polyline')
    }
}
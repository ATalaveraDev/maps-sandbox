import { Routes } from '@angular/router';
import { HereMapsComponent } from './components/here-maps/here-maps.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

export const routes: Routes = [
    {
        path: 'here-maps',
        component: HereMapsComponent
    },
    {
        path: 'google-maps',
        component: GoogleMapsComponent
    }
];

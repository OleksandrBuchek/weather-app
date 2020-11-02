import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherRoutePath } from './modules/weather/models';
import { WEATHER_ROUTES } from './modules/weather/weather-routing.module';

const routes: Routes = [
    ...WEATHER_ROUTES,
    {
        path: '',
        redirectTo: WeatherRoutePath.WeatherList,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: WeatherRoutePath.WeatherList,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

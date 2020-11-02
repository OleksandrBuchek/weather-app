import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherRoutePath } from './modules/weather/models';

const routes: Routes = [
    {
        path: '',
        redirectTo: WeatherRoutePath.WeatherList,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: WeatherRoutePath.WeatherList,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

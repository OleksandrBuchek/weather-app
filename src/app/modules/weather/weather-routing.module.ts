import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherItemContainerComponent } from './containers/weather-item/weather-item-container.component';
import { WeatherListContainerComponent } from './containers/weather-list/weather-list-container.component';
import { WeatherRoutePath } from './models';

export const WEATHER_ROUTES: Routes = [
    {
        path: WeatherRoutePath.WeatherList,
        component: WeatherListContainerComponent
    },
    {
        path: `${WeatherRoutePath.WeatherList}/:id`,
        component: WeatherItemContainerComponent
    }
];

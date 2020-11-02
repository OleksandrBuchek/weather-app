export enum CityId {
    London = 2643743,
    Paris = 2988506,
    Amsterdam = 2759794,
    Kyiv = 703448,
    Rome = 3169070
}

export enum UnitOfMeasurement {
    Metric = 'metric'
}

export enum WeatherRoutePath {
    WeatherList = 'weather-list'
}

export interface IGetWeatherDataOptions {
    citiesIds: CityId[];
}

export interface IWeatherBase {
    main: {
        temp: number;
    };
    wind: {
        speed: number;
    };
    weather: {
        description: string;
        main: string;
    }[];
}

export interface ICurrentWeather extends IWeatherBase {
    id: CityId;
    name: string;
}

export interface IGetCurrentWeatherMultipleResult {
    list: ICurrentWeather[];
}

export interface IForecast extends IWeatherBase {
    dt_txt: string;
}
export interface IGetForecastResult {
    list: IForecast[];
}

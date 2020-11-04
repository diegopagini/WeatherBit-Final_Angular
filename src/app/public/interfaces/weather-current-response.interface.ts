export interface WeatherCurrentResponse {
    count: number;
    data: Array<WeatherCity>;
}

export interface WeatherCity {
    app_temp: number;
    city_name: string;
    clouds: number;
    precip: number;
    pres: number;
    sunrise: string;
    sunset: string;
    temp: number;
    rh: number;
    wind_spd: number;
}
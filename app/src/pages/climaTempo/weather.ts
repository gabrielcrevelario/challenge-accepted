export default interface Locale  {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}
export interface Temperature {
  min: number;
  max: number;
}

export interface Rain {
  probability: number,
  precipitation: number
}

export interface Period {
  begin: string;
  end: string;
}
export interface WeatherItem {
  id: number,
  date: string,
  text: string,
  temperature: Temperature;
  rain: Rain;
}

export interface Weather {
  period?: Period;
  locale?: Locale;
  weather?: [WeatherItem]
}

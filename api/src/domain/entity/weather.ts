import  Locale  from "./locale";
import { Schema, Model, model, Document } from 'mongoose';

export interface Temperature extends Document {
  min: number;
  max: number;
}

export interface Rain extends Document {
  probability: number,
  precipitation: number
}

export interface Period extends Document {
  begin: string;
  end: string;
}
export interface WeatherItem extends Document {
  id: number,
  date: string,
  text: string,
  temperature: Temperature;
  rain: Rain;
}

export interface Weather extends Document {
  period?: Period;
  locale?: Locale;
  weather?: [WeatherItem]
}
const WeatherSchema = new Schema<Weather>();
export const WeatherMethods =  model('weather', WeatherSchema);

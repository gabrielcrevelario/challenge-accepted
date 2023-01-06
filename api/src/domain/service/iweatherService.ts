import { Weather } from "../entity/weather"


export interface IWeatherService {
    findByLocale(localeName:string):  Promise<Weather[]> 
    findAll(): Promise<Weather[]>
}
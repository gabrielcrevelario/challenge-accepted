import { Weather } from "../entity/weather"


export interface IWeatherRepository {
    findByLocale(localeName:string):  Promise<Weather[]> 
    findAll():  Promise<Weather[]> 
}
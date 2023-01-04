import { Weather } from "../entity/weather"


export interface IWeatherRepository {
    findByLocale(localeName:string):  Promise<Weather[]> 
    findByDate(dateStart:string, dateEnd:string):  Promise<Weather[]> 
}
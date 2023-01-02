import { Weather } from "../entity/weather"


export interface IWeatherRepository {
    findByLocale(localeName:string):  Promise<Weather[]> 
    findByDate(dateStart:Date, dateEnd:Date):  Promise<Weather[]> 
}
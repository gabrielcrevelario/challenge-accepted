import { Weather } from "../entity/weather"


export interface IWeatherService {
    findByLocale(localeName:string):  Promise<Weather[]> 
    findByDate(dateStart:string, dateEnd:string):  Promise<Weather[]> 
}
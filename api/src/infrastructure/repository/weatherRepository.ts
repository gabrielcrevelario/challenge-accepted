import { singleton } from "tsyringe";
import { Weather, WeatherMethods } from "../../domain/entity/weather";
import { IWeatherRepository } from "../../domain/repository/iweatherRepository";
@singleton()
export class WeatherRepository implements IWeatherRepository {
    
    public async findByLocale(localeName: string): Promise<Weather[]> {
        try {
            const weathers:Weather[] =  await  WeatherMethods.find({'locale.name': localeName});
            return weathers;
        } catch (error) {
            console.log(error);   
        }
    }
    public async findAll(): Promise<Weather[]> {
        const weathers:Weather[] = await WeatherMethods.find({});
        return weathers;
    }

}
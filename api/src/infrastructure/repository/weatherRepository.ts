import { singleton } from "tsyringe";
import { Weather, WeatherMethods } from "../../domain/entity/weather";
import { IWeatherRepository } from "../../domain/repository/iweatherRepository";
@singleton()
export class WeatherRepository implements IWeatherRepository {
    
    public async findByLocale(localeName: string): Promise<Weather[]> {
      const weathers:Weather[] = await WeatherMethods.find({ 'locale.nome':localeName });
      return weathers;
    }
    public async findByDate(dateStart: Date, dateEnd: Date): Promise<Weather[]> {
        const weathers:Weather[] = await WeatherMethods.find({ 'period.begin':{$gt: dateStart }, 'period.end':{$lt: dateEnd}});
        return weathers;
    }

}
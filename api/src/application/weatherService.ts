import { singleton, inject } from "tsyringe";
import { Weather } from "../domain/entity/weather";
import { IWeatherRepository } from "../domain/repository/iweatherRepository";
import { IWeatherService } from "../domain/service/iweatherService";
@singleton()
export class WeatherService implements IWeatherService {
    constructor(@inject('IWeatherRepository') private weatherRepository: IWeatherRepository) {}
    async findByLocale(localeName: string): Promise<Weather[]> {
        return this.weatherRepository.findByLocale(localeName);
    }
    async findByDate(dateStart: string, dateEnd: string): Promise<Weather[]> {
        return this.weatherRepository.findByDate(dateStart, dateEnd);
    }

}
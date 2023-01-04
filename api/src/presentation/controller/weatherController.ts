import { Response, Request } from "express";
import moment from "moment";
import { injectable, inject } from "tsyringe";
import { Weather } from "../../domain/entity/weather";
import { IWeatherService } from "../../domain/service/iweatherService";

@injectable()
export class WeatherController {
    constructor(@inject('IWeatherService') private weatherService:IWeatherService) {}
    async findByLocale(req:Request): Promise<Weather[]> {
        const localeName = req.params.localeName;
        return this.weatherService.findByLocale(localeName);
    }
    async findByDate(req:Request): Promise<Weather[]> {
        const dateStart =  req.params.dateStart;
        const dateEnd = req.params.dateEnd;
        return this.weatherService.findByDate(dateStart, dateEnd);
    }
}
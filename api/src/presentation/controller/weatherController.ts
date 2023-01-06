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
        const dateStart = req.query.dateStart;
        const dateEnd = req.query.dateEnd ? req.query.dateEnd: new Date().toDateString();
        const  weathers:Weather[] = await this.weatherService.findByLocale(localeName);
        return dateStart ? weathers.filter(x => x.period.begin === dateStart && x.period.end === dateEnd) : weathers;
    }
}
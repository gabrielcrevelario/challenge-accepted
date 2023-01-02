import { Response, Request } from "express";
import moment from "moment";
import { injectable, inject } from "tsyringe";
import { Weather } from "../../domain/entity/weather";
import { IWeatherService } from "../../domain/service/iweatherService";

@injectable()
export class WeatherController {
    constructor(@inject('IWeatherService') private weatherService:IWeatherService) {}
    async findByLocale(req:Request): Promise<Weather[]> {
        const localeName = req.params.localName;
        return this.weatherService.findByLocale(localeName);
    }
    async findByDate(req:Request): Promise<Weather[]> {
        const dateStart =  moment(req.params.dateStart, 'dd-MM-yyyy').format();
        const dateEnd = moment(req.params.dateEnd, 'dd-MM-yyyy').format();
        return this.weatherService.findByDate(dateStart, dateEnd);
    }
}
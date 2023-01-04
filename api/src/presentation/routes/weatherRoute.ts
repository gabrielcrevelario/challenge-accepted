import "reflect-metadata";
import { Request, Response, Router } from 'express';
import { container } from 'tsyringe';
import { WeatherService } from '../../application/weatherService';
import { WeatherRepository } from '../../infrastructure/repository/weatherRepository';
import { WeatherController } from '../controller/weatherController';
container.register('IWeatherRepository', { useClass: WeatherRepository }).resolve(WeatherRepository);
container.register('IWeatherService', { useClass: WeatherService }).resolve(WeatherService);
const weatherController = container.resolve(WeatherController);
const routers = Router().get('/weathers/locale-name/:localeName', async (req: Request, res: Response) =>{ 
   const weathers = await weatherController.findByLocale(req);
   res.send(weathers);
})
.get('/weathers/range-date/:dateStart/:dateEnd', async (req: Request, res: Response) => {
    const weathers = await weatherController.findByDate(req);
    res.send(weathers);
})
export default routers;
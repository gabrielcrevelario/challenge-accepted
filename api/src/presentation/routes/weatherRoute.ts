import { Request, Response, Router } from 'express';
import { container } from 'tsyringe';
import { WeatherService } from '../../application/weatherService';
import { WeatherRepository } from '../../infrastructure/repository/weatherRepository';
import { WeatherController } from '../controller/weatherController';
container.register('IWeatherService', { useClass: WeatherService }).resolve(WeatherService);
container.register('IWeatherRepository', { useClass: WeatherRepository }).resolve(WeatherRepository);
const weatherController = container.resolve(WeatherController);
const routers = Router().get('/weathers/locale-name', async (req: Request, res: Response) =>{ 
   const weathers = await weatherController.findByLocale(req);
   res.send(weathers);
})
.get('/weather', async (req: Request, res: Response) => {
    const weathers = await weatherController.findByDate(req);
    res.send(weathers);
})
export default routers;
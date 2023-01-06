import "reflect-metadata";
import { Request, Response, Router } from 'express';
import { container } from 'tsyringe';
import { WeatherService } from '../../application/weatherService';
import { WeatherRepository } from '../../infrastructure/repository/weatherRepository';
import { WeatherController } from '../controller/weatherController';
import cors from "cors";
container.register('IWeatherRepository', { useClass: WeatherRepository }).resolve(WeatherRepository);
container.register('IWeatherService', { useClass: WeatherService }).resolve(WeatherService);
const weatherController = container.resolve(WeatherController);
const corsOptions = {
    origin: [
      'http://localhost:3000',
    ],
  };
const routers = Router().get('/weathers', cors(corsOptions),async (req: Request, res: Response) =>{ 
    const weathers = await weatherController.findAll();
    res.send(weathers);
 }).get('/weathers/locale-name/:localeName',cors(corsOptions), async (req: Request, res: Response) =>{ 
    const weathers = await weatherController.findByLocale(req);
    res.send(weathers);
 })
export default routers;
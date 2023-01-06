import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SearchIcon from '@mui/icons-material/Search';
import WaterIcon from '@mui/icons-material/Water';
import NavBar from '../../components/navBar';
import { Input, Button, TextField, Box, Drawer } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MuiTextFieldProps } from '@mui/x-date-pickers/internals/components/PureDateInput';
import { Dayjs } from 'dayjs';
import { Weather, WeatherItem } from './weather';
import "./climaTempo.css";

import axios, { AxiosResponse } from "axios";
function getWeeksAfter(date: Dayjs | null, amount: number) {
    return date ? date.add(amount, 'week') : undefined;
}
export default (props: any) => {

    const [valueLocaleName, setValueLocaleName] = useState('');
    const [valueDate, setValueDate] = useState<DateRange<Dayjs>>([null, null]);
    const [openTop, setOpenTop] = useState(false);
    const [data, setData] = useState([]);
    const [weathers, setWeathers] = useState<WeatherItem[]>([]);
    const [temperatureType, setTemperatureType] = useState<'C' | 'F'>('C')
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;


    useEffect(() => { searchInit() }, [])

    const searchLocale = async () => {
        const response = await axios.get(`${REACT_APP_API_URL}/locale-name/${valueLocaleName}`);
        setData(response.data.flat(1));
        setWeathers(response.data.map((x: Weather) => x.weather).flat(1));
        setOpenTop(false);
    }
    const searchInit = async () => {
        debugger
        const response = await axios.get(`${REACT_APP_API_URL}`);
        setData(response.data[0]);
        setWeathers(response.data[0].weather);
        setOpenTop(false);
    }
    const setWeatherTypeTemperature = (type: 'C' | 'F') => {
        setTemperatureType(type);
        const weathersNewFormat = weathers.map((m: WeatherItem) => {
            if (type === 'C') {
                m.temperature.max = parseFloat(((m.temperature.max - 32) / 1.8).toFixed(2));
                m.temperature.min = parseFloat(((m.temperature.max - 32) / 1.8).toFixed(2));;
            } else {
                m.temperature.max = parseFloat(((m.temperature.max * 1.8) + 32).toFixed(2));
                m.temperature.min = parseFloat(((m.temperature.max * 1.8) + 32).toFixed(2));
            }
            return m;
        });
        setWeathers(weathersNewFormat);
    }
    return (<div className="page-clima">
        <NavBar onClick={(value: boolean) => setOpenTop(value)} changeTemperature={setWeatherTypeTemperature} />

        <Drawer
            anchor='top'
            open={openTop}
            onClose={() => setOpenTop(false)}
        >
            <div className="content-search">
                <TextField id="outlined-basic" value={valueLocaleName} onChange={event => {
                    const { value } = event.target;
                    setValueLocaleName(value);
                }} label="Nome do local" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker
                        disablePast
                        value={valueDate}
                        maxDate={getWeeksAfter(valueDate[0], 4)}
                        onChange={(newValue) => {
                            setValueDate(newValue);
                        }}
                        renderInput={(startProps: MuiTextFieldProps, endProps: MuiTextFieldProps) => (
                            <React.Fragment>
                                <TextField {...startProps} label={'inicio'} />
                                <Box sx={{ mx: 2, color: '#0080cd', fontWeight: 'bold' }}> Para </Box>
                                <TextField {...endProps} {...startProps} label={'Fim'} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                <Button onClick={searchLocale}>
                    <SearchIcon />
                </Button>
            </div>
        </Drawer>
        <div className="list-clima">
            {weathers.map((m: any) => {
                return (
                    <div className="card">
                        <div className="card-header">
                            <h4>{m.date}</h4>
                            <p>{m.text}</p>
                        </div>
                        <div className="card-container">
                            <div className="content-item">
                                <div className="item">
                                    <ArrowUpwardIcon />
                                    <h5>{m.temperature.max}º{temperatureType}</h5>
                                </div>
                                <div className="item">
                                    <WaterIcon />
                                    <h5>{m.rain.precipitation}mm</h5>
                                </div>
                            </div>
                            <div className="content-item">
                                <div className="item">
                                    <ArrowDownwardIcon />
                                    <h5>{m.temperature.min}º{temperatureType}</h5>
                                </div>
                                <div className="item">
                                    <ThunderstormIcon />
                                    <h5>{m.rain.probability}%</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    </div >)
}
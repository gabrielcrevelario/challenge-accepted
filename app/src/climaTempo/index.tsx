import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SearchIcon from '@mui/icons-material/Search';
import WaterIcon from '@mui/icons-material/Water';
import NavBar from '../components/navBar';
import { Input, Button, TextField, Box, Drawer } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MuiTextFieldProps } from '@mui/x-date-pickers/internals/components/PureDateInput';
import { Dayjs } from 'dayjs';
import "./climaTempo.css";
function getWeeksAfter(date: Dayjs | null, amount: number) {
    return date ? date.add(amount, 'week') : undefined;
}
export default (props: any) => {

    const [valueLocaleName, setValueLocaleName] = useState('');
    const [valueDate, setValueDate] = useState<DateRange<Dayjs>>([null, null]);
    const [openTop, setOpenTop] = useState(false);
    return (<div className="page-clima">
        <NavBar onClick={(value: boolean) => setOpenTop(value)} />

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
                <Button>
                    <SearchIcon />
                </Button>
            </div>
        </Drawer>
        <div className="list-clima">
            <div className="card">
                <div className="card-header">
                    <h4>01/01/2022</h4>
                    <p>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
                </div>
                <div className="card-container">
                    <div className="content-item">
                        <div className="item">
                            <ArrowUpwardIcon />
                            <h5>33º</h5>
                        </div>
                        <div className="item">
                            <WaterIcon />
                            <h5>10mm</h5>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="item">
                            <ArrowDownwardIcon />
                            <h5>13º</h5>
                        </div>
                        <div className="item">
                            <ThunderstormIcon />
                            <h5>50%</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-header">
                    <h4>01/01/2022</h4>
                    <p>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
                </div>
                <div className="card-container">
                    <div className="content-item">
                        <div className="item">
                            <ArrowUpwardIcon />
                            <h5>33º</h5>
                        </div>
                        <div className="item">
                            <WaterIcon />
                            <h5>10mm</h5>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="item">
                            <ArrowUpwardIcon />
                            <h5>13º</h5>
                        </div>
                        <div className="item">
                            <ThunderstormIcon />
                            <h5>50%</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="card-header">
                    <h4>01/01/2022</h4>
                    <p>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
                </div>
                <div className="card-container">
                    <div className="content-item">
                        <div className="item">
                            <ArrowUpwardIcon />
                            <h5>33º</h5>
                        </div>
                        <div className="item">
                            <WaterIcon />
                            <h5>10mm</h5>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="item">
                            <ArrowUpwardIcon />
                            <h5>13º</h5>
                        </div>
                        <div className="item">
                            <ThunderstormIcon />
                            <h5>50%</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >)
}
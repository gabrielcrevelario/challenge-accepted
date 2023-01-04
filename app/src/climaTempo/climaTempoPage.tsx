import * as React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterIcon from '@mui/icons-material/Water';
import "./climaTempo.css";
export default (props: any) => {
    return (<div className="page-clima">
        <div className="content-search">

        </div>
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
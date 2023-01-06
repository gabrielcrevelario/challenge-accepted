import "./navBar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Switch } from "@mui/material";
import { useState } from "react";
interface NavBarProps {
    onClick: Function;
    changeTemperature: Function;
}
export default (props: NavBarProps) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const { onClick, changeTemperature } = props;
    const [checked, setChecked] = useState(true);
    const changeTemperatureType = (e: any) => {
        const type = e.target.checked ? 'C' : 'F';
        setChecked(e.target.checked);
        changeTemperature(type);
    }
    return (<nav>
        <img src="/logo-white.png" alt="" />
        <button onClick={() => onClick(true)}><ExpandMoreIcon /> </button>
        <div className="switchContainer">
            <span>C <ArrowRightIcon /> F</span>
            <Switch checked={checked}  {...label} color="default" onClick={(event: any) => changeTemperatureType(event)} defaultChecked />
        </div>
    </nav>)
}
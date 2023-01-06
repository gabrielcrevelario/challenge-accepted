import "./navBar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface NavBarProps {
    onClick: any;
}
export default (props: NavBarProps) => {
    const { onClick } = props;
    return (<nav>
        <img src="/logo-white.png" alt="" />
        <button onClick={() => onClick(true)}><ExpandMoreIcon /> </button>
    </nav>)
}
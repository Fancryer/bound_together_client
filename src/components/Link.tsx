import {LinkProps,Link as ReactLink,useLocation} from "react-router-dom";
import "../styles/BoundTogether.css";
import {Scrollchor,ScrollchorProps} from "react-scrollchor";

const Link=(props:ScrollchorProps)=>
{
	const isOpened=props.to===useLocation().pathname;
	return <Scrollchor {...props} className={isOpened?"Link Opened":"Link"}/>;
}

export default Link;
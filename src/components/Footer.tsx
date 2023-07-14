import {useState}       from "react";
import DivImg           from "./atomic/DivImg";
import DivP             from "./atomic/DivP";
import Logo from "../bound-together-high-resolution-logo-black-on-transparent-background.png";
import Div              from "./atomic/Div";


const Footer=()=>
{
	const
		[hidden,setHidden]=useState(true),
		switchHidden=()=>setHidden(!hidden);
	return (
		hidden
		?<footer className="Footer" onClick={switchHidden}>▲</footer>
		:<footer className="FooterOpened" onClick={switchHidden}>
			<Div><img src={Logo} alt={"Logo"} style={{width:"50px",height:"50px"}}/></Div>
			▼
			<DivP children={"© 2023 BoundTogether"}/>
		</footer>
	);
}

export default Footer;
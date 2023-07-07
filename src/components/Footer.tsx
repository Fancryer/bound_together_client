import {useState} from "react";
import DivImg     from "./atomic/DivImg";
import DivP       from "./atomic/DivP";

type TFooterProps=
	{
		logo?:string;
		copyright:string;
	}

const Footer=({logo,copyright}:TFooterProps)=>
{
	const
		[hidden,setHidden]=useState(true),
		switchHidden=()=>setHidden(!hidden);
	return (
		hidden
		?<footer className="Footer" style={{height:"25px"}} onClick={switchHidden}>▲</footer>
		:<footer className="Footer" onClick={switchHidden}>
			<DivImg imageProps={{src:logo,alt:"Логотип"}}/>
			▼
			<DivP children={copyright}/>
		</footer>
	);
}

export default Footer;
//import "../styles/Navbar.css";
import "../styles/BoundTogether.css";
import Link         from "./Link";
import {Scrollchor} from "react-scrollchor";
import {useState}   from "react";
import DivImg       from "./atomic/DivImg";
import DivP         from "./atomic/DivP";

const Navbar=()=>
{
	const
		[hidden,setHidden]=useState(true),
		switchHidden=()=>setHidden(!hidden);
	return (
		hidden
		?<nav className={"Navbar"} onClick={switchHidden}>▼</nav>
		:<nav className={"NavbarOpened"} onClick={switchHidden}>
			<Link to={"#about"}>О проекте</Link>
			<Link to={"#help"}>Виды помощи</Link>
			▲
			<Link to={"#reviews"}>Отзывы</Link>
			<Link to={"#contacts"}>Контакты</Link>
		</nav>
	);
}

export default Navbar;
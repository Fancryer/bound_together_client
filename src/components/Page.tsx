import {ReactNode} from "react";
import Navbar      from "./Navbar";
import Footer      from "./Footer";

type TPageProps=
	{
		children?:ReactNode|ReactNode[]|undefined
	}

export const Page=(props:TPageProps)=>
	<div className={"Page"}>
		{props.children}
	</div>
;

export default Page;
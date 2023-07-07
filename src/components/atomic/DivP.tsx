import {DetailedHTMLProps,HTMLAttributes,ImgHTMLAttributes,ReactNode} from "react";
import Div                                                            from "./Div";

type TDivPProps=
	{
		divProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>,
		pProps?:DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
		children?:ReactNode|ReactNode[]|undefined
	}

const DivP=({divProps,pProps,children}:TDivPProps)=>
{
	return <Div divProps={divProps}><p {...pProps}>{children}</p></Div>;
}

export default DivP;
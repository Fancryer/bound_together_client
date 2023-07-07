import {DetailedHTMLProps,HTMLAttributes,ImgHTMLAttributes,ReactNode} from "react";

type TDivPProps=
	{
		divProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>,
		children?:ReactNode|undefined
	}

const Div=({divProps,children}:TDivPProps)=>
{
	return <div {...divProps} children={children}/>;
}

export default Div;
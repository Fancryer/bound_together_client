import {DetailedHTMLProps,HTMLAttributes,ImgHTMLAttributes} from "react";
import Div                                                  from "./Div";

type TDivImgProps=
	{
		divProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>,
		imageProps?:DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>
	}

const DivImg=({divProps,imageProps}:TDivImgProps)=>
{
	return <Div {...divProps}><img {...imageProps} src={imageProps?.src}/></Div>;
}

export default DivImg;
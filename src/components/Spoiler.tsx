import {DetailedHTMLProps,HTMLAttributes,ReactNode,useState} from "react";

type TSpoilerProps=
	{
		children:ReactNode|ReactNode[]|undefined,
		name?:string,
		openChar?:string,
		closeChar?:string,
		wrapperProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>,
		contentOpenProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>,
		contentHiddenProps?:DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>
	}

const Spoiler=
	(
		{
			children,
			name,
			openChar="▼",
			closeChar="▲"
		}:TSpoilerProps
	)=>
	{
		const
			[hidden,setHidden]=useState(false),
			switchHidden=()=>setHidden(!hidden);
		return (
			<div className={"Spoiler"}>
				<div onClick={switchHidden} className={"SpoilerHeader"}>
					<div>{name}</div>
					<div>{hidden?closeChar:openChar}</div>
				</div>
				<div className={hidden?"SpoilerContent":"SpoilerContent Hidden"}>{children}</div>
			</div>
		)
	}

export default Spoiler;
import {DetailedHTMLProps,InputHTMLAttributes} from "react";

type TInputProps=DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>
                 &{name?:string,setValue:(value:boolean)=>void,useParagraph?:boolean};

const Input=(props:TInputProps)=><label>
	{props.name!==undefined&&(props.useParagraph?<p>{props.name}</p>:props.name)}
	<input
		type={"checkbox"}
		{...props}
		onInput={(e)=>{props.setValue(e.currentTarget.checked);}}
	/>
</label>;

export default Input;
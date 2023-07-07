import {DetailedHTMLProps,InputHTMLAttributes} from "react";

type TInputProps=DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>
                 &{name?:string,setValue:(value:string)=>void,useParagraph?:boolean};

const Input=(props:TInputProps)=><label>
	{props.name!==undefined&&(props.useParagraph?<p>{props.name}</p>:props.name)}
	<input
		{...props}
		onInput={(e)=>{props.setValue(e.currentTarget.value);}}
	/>
</label>;

export default Input;
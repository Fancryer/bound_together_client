import {DetailedHTMLProps,TextareaHTMLAttributes} from "react";

type TInputProps=DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>
                 &{name?:string,setValue:(value:string)=>void,useParagraph?:boolean};

const Input=(props:TInputProps)=><label>
	{props.name!==undefined&&(props.useParagraph?<p>{props.name}</p>:props.name)}
	<textarea
		{...props}
		onInput={(e)=>{props.setValue(e.currentTarget.value);}}
	/>
</label>;

export default Input;
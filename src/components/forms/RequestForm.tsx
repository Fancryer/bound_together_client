import {FormEventHandler,ReactNode} from "react";

type TRequestFormProps=
	{
		handleSubmit?:FormEventHandler<HTMLFormElement>;
		children?:ReactNode|ReactNode[]|undefined
	}

const RequestForm=({children,handleSubmit}:TRequestFormProps)=>
	<form name={"request"} onSubmit={handleSubmit} className={"Form Request"}>
		{children}
	</form>;

export default RequestForm;
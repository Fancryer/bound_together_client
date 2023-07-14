import Spacer                         from "../Spacer";
import {Database,EUserRole,ResultSet} from "../../database/Database";

export type TMessage=
	{
		id:number,
		sentTime:Date,
		content:string,
		chatId:number,
		senderId:number,
		attachFilesPaths?:string[]
	}

export type TMessageProps=
	{
		message:TMessage,
		isCurrentUser:boolean
	}

const getMessageSender=(senderId:number)=>
{
	const {name,role}=ResultSet.of(Database.users)
	                           .where(user=>user.id===senderId)
	                           .select(["name","role"])
	                           .get(0) as {name:string,role:EUserRole};
	return `${name} (${role})`;
}

const Message=({message:{content,id,sentTime,attachFilesPaths,senderId},isCurrentUser}:TMessageProps)=>(
	<div className={isCurrentUser?"RightMessage":"LeftMessage"} key={id}>
		<div className={"MessageSender"}>
			{getMessageSender(senderId)}
		</div>
		<Spacer/>
		<div className={"MessageContent"}>{content}</div>
		<Spacer/>
		<div className={"MessageTime"}>{sentTime.toLocaleString()}</div>
		{
			!!attachFilesPaths
			&&<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
			<Spacer/>
	         {
				 attachFilesPaths?.map((path,i)=><a href={path}>{path}</a>)
			 }
         </div>
		}
	</div>
);

export default Message;
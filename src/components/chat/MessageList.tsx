import {TChat}              from "../../pages/VolunteerPage";
import "../../styles/chat/ChatTogether.sass";
import Message,{TMessage}   from "./Message";
import Chance               from "chance";
import {Database,ResultSet} from "../../database/Database";

const userId=1;
const isCurrentUser=(id:number)=>
{
	return id===userId;
}

const MessageList=({chat}:{chat:TChat|null})=>
	<div className={"MessageList"}>
		{
			ResultSet.of(Database.messages)
			         .where(message=>message.chatId===chat?.id)
			         .orderBy((a,b)=>a.sentTime.getTime()-b.sentTime.getTime())
			         .toArray()
			         .map
			         (
				         message=><Message
					         message=
						         {
							         {
								         id:message.id,
								         sentTime:message.sentTime,
								         content:message.content,
								         chatId:message.chatId,
								         senderId:message.senderId,
								         attachFilesPaths:message.attachFilesPaths
							         }
						         }
					         isCurrentUser={isCurrentUser(message.senderId)}
				         />
			         )
		}
	</div>;

export default MessageList;
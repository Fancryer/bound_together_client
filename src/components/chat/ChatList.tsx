import ChatPreview               from "./ChatPreview";
import {TChat}                   from "../../pages/VolunteerPage";
import {EHelpRequestType}        from "../../utils/RequestModule";
import Database,{Chat,ResultSet} from "../../database/Database";
import message                   from "./Message";

const getChats=(requestTypes:EHelpRequestType[]):TChat[]=>
	ResultSet.of(Database.chats)
	         .select(["id","name","status"])
	         .where(chat=>requestTypes.includes(chat.status))
	         .toArray()
	         .map
	         (
		         chat=>({
			         id:chat.id,
			         name:chat.name,
			         lastMessage:ResultSet.of(Database.messages)
			                              .where(message=>message.chatId===chat.id)
			                              .orderBy((a,b)=>b.sentTime.getTime()-a.sentTime.getTime())
			                              .get(),
			         status:chat.status
		         })
	         );

console.log(getChats([EHelpRequestType.Fresh,EHelpRequestType.Ongoing]));

type TChatListProps=
	{
		selectedOptions:EHelpRequestType[],
		onChatSelected:(selectedChat:TChat|null)=>void
	}

const ChatList=({selectedOptions,onChatSelected}:TChatListProps)=>
	<div className={"ChatList"}>
		{
			getChats(selectedOptions||[]).map
			                             (
				                             chat=>
					                             <ChatPreview
						                             key={chat.id}
						                             chat={chat}
						                             onChatSelected={onChatSelected}
					                             />
			                             )
		}
	</div>;

export default ChatList;
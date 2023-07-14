import "../../styles/chat/ChatPreview.sass";
import {TChat}              from "../../pages/VolunteerPage";
import Database,{ResultSet} from "../../database/Database";

export type TMessage=
	{
		sentTime:Date,
		content:string
	}

type TChatPreviewProps=
	{
		chat:TChat|null,
		onChatSelected:(chat:TChat|null)=>void
	}

const getMessagePreviewContent=(chat:TChat)=>
{
	if(!chat.lastMessage) return "";
	if(chat.lastMessage.content.length<18) return chat.lastMessage.content;
	const length=Math.min(chat.lastMessage.content.length,17);
	return chat.lastMessage.content.substring(0,length)+"...";
}

const getMessagePreviewName=(chat:TChat)=>
{
	if(!chat.lastMessage) return "";
	if(chat.name.length<18) return chat.name;
	const length=Math.min(chat.name.length,17);
	return chat.name.substring(0,length)+"...";
}

const ChatPreview=({chat,onChatSelected}:TChatPreviewProps)=>
{
	return !chat
	       ?<div/>
	       :<div className="ChatPreview" onClick={()=>onChatSelected(chat)} key={chat.id}>
		       <div className="ProfileImage"><img alt={"ProfileImage"} style={{width:"50px",height:"50px"}}/></div>
		       <div className="SenderImage">
			       {/*<img alt={"SenderImage"}/>*/}
			       {
					   chat.status
			       }
			   </div>
		       <div className="ChatName">
			       {
					   getMessagePreviewName(chat)
				   }
			   </div>
		       <div className="LastSentTime">
			       {chat.lastMessage?.sentTime.toLocaleTimeString()}
		       </div>
		       <div className="LastMessage">
			       {getMessagePreviewContent(chat)}
		       </div>
	       </div>;
}

export default ChatPreview;
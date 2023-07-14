import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import {TChat} from "../../pages/VolunteerPage";
import {useRef} from "react";

const ChatView=({chat,closeChat}:{chat:TChat|null,closeChat:()=>void})=>
{
	return <div className={"ChatView"}>
		<MessageList chat={chat}/>
		<ChatInput chat={chat} closeChat={closeChat}/>
	</div>;
}

export default ChatView;
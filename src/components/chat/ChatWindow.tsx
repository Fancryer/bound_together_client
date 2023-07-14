import Select,{GroupBase,MultiValue} from "react-select";
import ChatTitle                     from "./ChatTitle";
import ChatList                      from "./ChatList";
import ChatView                      from "./ChatView";
import {TChat,TOptions}              from "../../pages/VolunteerPage";
import {EHelpRequestType}            from "../../utils/RequestModule";
import {Ref,useRef}                  from "react";
import {Chat,Database,ResultSet}     from "../../database/Database";

const ChatWindow=
	(
		{options,chatProps:[selectedChat,setSelectedChat],optionsProps:[selectedOptions,setSelectedOptions]}:
			{
				options:TOptions[],
				chatProps:[selectedChat:TChat|null,setSelectedChat:(chat:TChat|null)=>void],
				optionsProps:[selectedOptions:EHelpRequestType[],setSelectedOptions:(options:EHelpRequestType[])=>void]
			}
	)=>
	{
		const handleChange=(selectedOptions:MultiValue<TOptions>)=>
		{
			if(!selectedOptions.length) setSelectedChat(null);
			setSelectedOptions(selectedOptions.map(option=>option.value));
		}
		return <div className={"ChatWindow"}>
			<div className={"FilterOptions"}>
				<Select
					className="basic-single"
					classNamePrefix="select"
					closeMenuOnSelect={false}
					isClearable={true}
					isSearchable={true}
					name="helpRequestStatus"
					options={options}
					isMulti={true}
					onChange={handleChange}
				/>
			</div>
			<ChatTitle
				chat={selectedChat}
				closeChat={()=>setSelectedChat(null)}
			/>
			<UserInfo chat={selectedChat}/>
			<ChatList selectedOptions={selectedOptions} onChatSelected={setSelectedChat}/>
			<ChatView chat={selectedChat} closeChat={()=>setSelectedChat(null)}/>
		</div>
	};

const UserInfo=({chat}:{chat:TChat|null})=>
{
	return <div className={"UserInfo"}>
		{
			chat?.status
		}
	</div>
};

export default ChatWindow;
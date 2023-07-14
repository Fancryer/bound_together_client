import {options,TChat,TOptions} from "../../pages/VolunteerPage";
import Select,{SingleValue}     from "react-select";
import {EHelpRequestType}       from "../../utils/RequestModule";


const ChatTitle=({chat,closeChat}:{chat:TChat|null,closeChat:()=>void})=>
{
	const handleChange=(selectedOption:SingleValue<TOptions>)=>
	{
		closeChat();
	}

	return <div className={"ChatTitle"}>
		<div>{chat?.name}</div>
		{
			chat
			&&[EHelpRequestType.Fresh,EHelpRequestType.Ongoing].includes(chat.status)
			&&<Select
                className="basic-single"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                name="helpRequestStatus"
                options={options}
                defaultValue={options.filter(option=>option.value===chat.status)[0]}
                onChange={handleChange}
            />
		}
	</div>;
};

export default ChatTitle;
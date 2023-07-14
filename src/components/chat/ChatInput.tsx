import {ChangeEvent,FormEventHandler,SetStateAction,useRef,useState} from "react";
import AttachFileIcon                                                from "../../AttachFileIcon.png";
import {TChat}                                                       from "../../pages/VolunteerPage";
import {EHelpRequestType}                                            from "../../utils/RequestModule";


const ChatInput=({chat,closeChat}:{chat:TChat|null,closeChat:()=>void})=>
{
	const inputRef=useRef<HTMLInputElement>(null);
	const [messageText,setMessageText]=useState("");
	const [fileList,setFileList]=useState<FileList|null>(null);
	const fileRef=useRef<HTMLInputElement>(null);
	const [content,setContent]=useState("");
	const handleFileChange=(e:ChangeEvent<HTMLInputElement>)=>
	{
		console.log(e.target.files);
		setFileList(e.target.files);
	}

	const handleCloseClick=():void=>
	{
		setContent("");
		closeChat();
		if(inputRef.current) inputRef.current.innerHTML="";
	};

	const handleChange=(event:ChangeEvent<HTMLDivElement>):void=>
	{
		setContent(event.target.innerHTML);
	};

	return <div
		className={"ChatInput"}
		style=
			{
				chat&&[EHelpRequestType.Fresh,EHelpRequestType.Ongoing].includes(chat.status)
				?{}
				:{display:"none"}
			}
	>
		<div className="AttachFile">
			<img src={AttachFileIcon} alt={"Attach file"} onClick={()=>fileRef.current?.click()}/>
			<input
				type="file"
				ref={fileRef}
				style={{display:"none"}}
				multiple={true}
				onChange={handleFileChange}
			/>
		</div>
		<div
			className="MessageInput"
			ref={inputRef}
			contentEditable={true}
			role="textarea"
			aria-multiline="true"
			onChange={handleChange}
		/>
		<div className={"SendButton"}>
			<div style={{cursor:"pointer"}}>Send</div>
			<div
				style={{cursor:"pointer"}}
				onClick={handleCloseClick}
			>
				Close
			</div>
		</div>
	</div>;
}

export default ChatInput;
import React,{useState} from "react";
import Page             from "../components/Page";
import Select,{MultiValue}    from "react-select";
import {EHelpRequestType}     from "../utils/RequestModule";
import "../styles/chat/ChatTogether.sass";
import ChatPreview,{TMessage} from "../components/chat/ChatPreview";
import Spacer                 from "../components/Spacer";
import ChatInput              from "../components/chat/ChatInput";
import ChatView               from "../components/chat/ChatView";
import ChatList from "../components/chat/ChatList";
import ChatTitle from "../components/chat/ChatTitle";
import ChatWindow from "../components/chat/ChatWindow";

const repeatArray=<T extends any>(arr:Array<T>,count:number=1):T[]=>Array(count).fill(arr).flat()

export type TOptions=
	{
		value:EHelpRequestType,
		label:string
	}

export const options:TOptions[]=
	[
		{
			value:EHelpRequestType.Fresh,
			label:"Свежие"
		},
		{
			value:EHelpRequestType.Ongoing,
			label:"В работе"
		},
		{
			value:EHelpRequestType.Completed,
			label:"Выполненные"
		},
		{
			value:EHelpRequestType.Aborted,
			label:"Отменённые пользователем"
		},
		{
			value:EHelpRequestType.Abandoned,
			label:"Заброшенные"
		},
		{
			value:EHelpRequestType.Declined,
			label:"Отменённые волонтёром"
		}
	];

export type TChat=
	{
		id:number,
		name:string,
		lastMessage:TMessage|undefined,
		status:EHelpRequestType
	};

export default function VolunteerPage()
{
	const [selectedOptions,setSelectedOptions]=useState<EHelpRequestType[]>([]);
	const [selectedChat,setSelectedChat]=useState<TChat|null>(null);
	return <Page>
		<Spacer/>
		<ChatWindow
			options={options}
			chatProps={[selectedChat,setSelectedChat]}
			optionsProps={[selectedOptions,setSelectedOptions]}
		/>
		<Spacer/>
	</Page>;
}
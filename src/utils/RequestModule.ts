export enum EHelpRequestType
{
	//Represents a fresh help request that needs to be processed or addressed
	Fresh="Свежие",
	//Represents a help request that is currently being worked on or in progress
	Ongoing="В работе",
	//Represents a help request that has been successfully resolved or completed
	Completed="Выполненные",
	//Represents a help request that has been intentionally aborted or stopped before completion
	Aborted="Отменённые пользователем",
	//Represents a help request that has been left unfinished or without further progress
	Abandoned="Заброшенные",
	//Represents a help request that has been declined or rejected
	Declined="Отменённые волонтёром"
}

export const helpRequestTypeLabels=
	{
		[EHelpRequestType.Fresh]:"Свежие",
		[EHelpRequestType.Ongoing]:"В работе",
		[EHelpRequestType.Completed]:"Выполненные",
		[EHelpRequestType.Aborted]:"Отменённые пользователем",
		[EHelpRequestType.Abandoned]:"Заброшенные",
		[EHelpRequestType.Declined]:"Отменённые волонтёром"
	};
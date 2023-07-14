import {EHelpRequestType} from "../utils/RequestModule";
import Chance             from "chance";
import {json}             from "stream/consumers";

export enum EUserRole
{
	Guest="Гость",
	Volunteer="Волонтёр",
	Admin="Администратор"
}

export class HelpRequest
{
	private readonly _id:number=new Chance().integer();

	constructor
	(
		private readonly _name:string,
		private readonly _phone:string,
		private readonly _theme:string,
		private readonly _problem:string,
		private _status:EHelpRequestType=EHelpRequestType.Fresh
	)
	{}

	toString=()=>
		[
			"[Имя]: "+this.name,
			"[Телефон]: "+this.phone,
			"[Тема]: "+this.theme,
			"[Проблема]: "+this.problem
		].join("\n");

	get id()
	{
		return this._id;
	}

	get name()
	{
		return this._name;
	}

	get phone()
	{
		return this._phone;
	}

	get theme()
	{
		return this._theme;
	}

	get problem()
	{
		return this._problem;
	}

	get status()
	{
		return this._status;
	}

	set status(status:EHelpRequestType)
	{
		this._status=status;
	}
}


export class User
{
	private readonly _id:number=new Chance().integer();

	constructor
	(
		private _name:string,
		private _role:EUserRole=EUserRole.Guest
	)
	{}

	get id()
	{
		return this._id;
	}

	get name()
	{
		return this._name;
	}

	get role()
	{
		return this._role;
	}

	set name(name:string)
	{
		this._name=name;
	}

	set role(role:EUserRole)
	{
		this._role=role;
	}
}

export class Chat
{
	private _id:number=new Chance().integer();

	constructor
	(
		private _name:string,
		private _status:EHelpRequestType=EHelpRequestType.Fresh
	)
	{}

	get id()
	{
		return this._id;
	}

	set id(id:number)
	{
		this._id=id;

	}

	get name()
	{
		return this._name;
	}

	set name(name:string)
	{
		this._name=name;
	}

	get status()
	{
		return this._status;
	}

	set status(status:EHelpRequestType)
	{
		this._status=status;
	}
}

export class Message
{
	private _id:number=new Chance().integer();

	constructor
	(
		private _sentTime:Date,
		private _content:string,
		private _chatId:number,
		private _senderId:number,
		private _attachFilesPaths?:string[]
	)
	{}

	get id()
	{
		return this._id;
	}

	get sentTime()
	{
		return this._sentTime;
	}

	get content()
	{
		return this._content;
	}

	get chatId()
	{
		return this._chatId;
	}

	get senderId()
	{
		return this._senderId;
	}

	get attachFilesPaths()
	{
		return this._attachFilesPaths;
	}

}

export class BoundFile
{
	private _id:number=new Chance().integer();

	constructor
	(
		private _path:string=new Chance().url(),
		private _file:File[]
	)
	{}

	get id()
	{
		return this._id;
	}

	get path()
	{
		return this._path;
	}

	get file()
	{
		return this._file;
	}
}

export class Database
{
	private static _users:User[]=
		[
			new User(new Chance().name(),EUserRole.Guest),
			new User(new Chance().name(),EUserRole.Volunteer),
			new User(new Chance().name(),EUserRole.Admin),
			new User(new Chance().name(),EUserRole.Guest)
		];
	private static _chats:Chat[]=
		[
			new Chat("Name",EHelpRequestType.Ongoing),
			new Chat("John",EHelpRequestType.Fresh),
			new Chat("Alice",EHelpRequestType.Completed),
			new Chat("Bob",EHelpRequestType.Abandoned),
			new Chat("David",EHelpRequestType.Declined),
			new Chat("Olivia",EHelpRequestType.Fresh),
			new Chat("Sarah",EHelpRequestType.Completed)
		];
	private static _messages:Message[]=
		[

		];
	private static _helpRequests:HelpRequest[]=
		[
			new HelpRequest
			(
				new Chance().name(),
				new Chance().phone(),
				new Chance().string(),
				new Chance().paragraph()
			)
		];
	private static _boundFiles:BoundFile[]=
		[];

	static get users()
	{
		return Database._users;
	}

	static getUserById=(id:number)=>Database.users.find(user=>user.id===id);
	static addUser=(user:User)=>Database.users.push(user);


	static get chats()
	{
		return Database._chats;
	}

	static getChatById=(id:number)=>Database.chats.find(chat=>chat.id===id);
	static addChat=(chat:Chat)=>Database.chats.push(chat);

	static get messages()
	{
		return Database._messages;
	}

	static getMessageById=(id:number)=>Database.messages.find(message=>message.id===id);
	static addMessage=(message:Message)=>Database.messages.push(message);


	static get helpRequests()
	{
		return Database._helpRequests;
	}

	static getHelpRequestById=(id:number)=>Database.helpRequests.find(helpRequest=>helpRequest.id===id);
	static getHelpRequestByStatus=(status:EHelpRequestType)=>Database.helpRequests.filter(request=>request.status
	                                                                                               ===status);
	static addHelpRequest=(helpRequest:HelpRequest)=>Database.helpRequests.push(helpRequest);

	static get boundFiles()
	{
		return Database._boundFiles;
	}

	static getBoundFileById=(id:number)=>Database.boundFiles.find(boundFile=>boundFile.id===id);
	static addBoundFile=(boundFile:BoundFile)=>Database.boundFiles.push(boundFile);
}

export class ResultSet<T>
{
	private constructor(private readonly items:T[]){}

	static of=<T>(items:T[]):ResultSet<T>=>new ResultSet(items);

	where=(condition:(item:T)=>boolean):ResultSet<T>=>new ResultSet(this.items.filter(condition));

	select=<K extends keyof T>(selectFields:K[])=>
		new ResultSet(this.items.map(item=>this.pick(item,selectFields)))

	orderBy=(comparator:(a:T,b:T)=>number)=>new ResultSet(this.items.sort(comparator));

	toArray=():T[]=>this.items;

	get=(index:number=0):T=>this.items[index];

	private pick=<K extends keyof T>(item:T,selectFields:K[])=>
		selectFields.reduce((result,field)=>(result[field]=item[field], result),{} as Pick<T,K>);

}

export default Database;
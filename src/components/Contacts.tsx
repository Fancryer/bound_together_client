import {FC}   from "react";
import Spacer from "./Spacer";

interface Contact
{
	name:string;
	email:string;
	phone:string;
}

interface ContactsProps
{
	contacts:Contact[];
}

const Contacts:FC<ContactsProps>=({contacts})=>
{
	return (
		<div>
			<h2>Контакты</h2>
			<ul>
				{
					contacts.map
					        (
						        (contact,index)=>
							        <li key={index}>
								        <div className="Contact">
									        <div>Имя: {contact.name}</div>
									        <div>Email: {contact.email}</div>
									        <div>Телефон: {contact.phone}</div>
								        </div>
								        {index!==contacts.length-1&&<Spacer/>}
							        </li>
					        )
				}
			</ul>
		</div>
	);
};

export default Contacts;
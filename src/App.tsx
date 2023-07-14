import React,{ReactNode,useState}   from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainPage                     from "./pages/MainPage";
import VolunteerSigninUrl           from "./config/VolunteerConfig";
import RoleRoute                    from "./components/authentication/RoleRoute";
import VolunteerPage                from "./pages/VolunteerPage";
import nock                         from "nock";
import Page                         from "./components/Page";
import {Form}                       from "grommet";
import Input                        from "./components/forms/Input";
import TextArea                     from "./components/forms/TextArea";
import CheckBox                     from "./components/forms/CheckBox";
import RequestForm                  from "./components/forms/RequestForm";
import Spacer                       from "./components/Spacer";
import Chance                       from "chance";
import Database,{Chat,Message}      from "./database/Database";

// nock('https://example.com')
// 	.get('/api/user/:id')
// 	.reply(200,(uri,requestBody)=>
// 	{
// 		const userId=uri.split('/').pop();
// 		return (
// 			{
// 				id:userId,
// 				name:'John Doe',
// 				role:'admin'
// 			}
// 		);
// 	});


function SignInPage()
{
	return <Page>
		<RequestForm handleSubmit={(e)=>{e.preventDefault();}}>
			<label form={"request"}>Вход</label>
			<Spacer/>
			<Input
				setValue={()=>{}}
				placeholder={"Номер телефона"}
				name={"Номер телефона"}
				style={{width:"100%"}}
				form={"request"}
				className={"Input"}
			/>
			<Spacer/>
			<Input setValue={()=>{}} placeholder={"Пароль"} name={"Пароль"} style={{width:"100%"}}
			       form={"request"}/>
			<Spacer/>
			<input type={"submit"} value={"Вход"}/>
		</RequestForm>
	</Page>;
}

function SigninRoute()
{
	const [signed,setSigned]=useState(false);
	return <div>
		{/*<SignInPage/>*/}
		<VolunteerPage/>
	</div>;
}

Database.helpRequests
        .forEach
        (
	        (request,index)=>
	        {
		        Database.addChat
		                (
			                new Chat(request.theme,request.status)
		                );
		        Database.addMessage
		                (
			                new Message
			                (
			                    new Chance().date(),
			                    request.toString(),
			                    Database.chats[index].id,
			                    Database.users[0].id
			                )
		                )
	        }
        );

function App()
{
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index path={"/"} element={<MainPage/>}/>
					<Route
						path={VolunteerSigninUrl}
						element={<SigninRoute/>}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

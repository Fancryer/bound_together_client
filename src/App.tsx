import React                                    from 'react';
import './App.css';
import {Anchor}                                 from "grommet/es6";
import {BrowserRouter,Route,Routes,useLocation} from "react-router-dom";
import MainPage                                 from "./pages/MainPage";
import Page                                     from "./components/Page";
import VolunteerSigninUrl                       from "./config/VolunteerConfig";
import RoleRoute                                from "./components/authentication/RoleRoute";

function VolunteerPage()
{
	return <div/>;
}

function App()
{
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<MainPage/>}></Route>
					<Route
						path={VolunteerSigninUrl}
						element={<RoleRoute props={{element:<VolunteerPage/>}}/>}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

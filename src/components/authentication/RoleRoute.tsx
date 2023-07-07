import {Link,Route,RouteProps} from "react-router-dom";

type TRoleRouteProps=
	{
		role?:string;
		roles?:string[];
		props:RouteProps
	}

const RoleRoute=({role="user",roles=["user"],props}:TRoleRouteProps)=>
	!roles.length||roles.includes(role)
	?<Route {...props}/>
	:<Link to="/"/>;

export default RoleRoute;
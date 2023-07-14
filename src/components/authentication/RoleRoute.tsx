import {Link,Navigate,Route,RouteProps,useLocation} from "react-router-dom";
import CookieDealer                                         from "../../utils/CookieDealer";
import {ReactNode} from "react";

type TRoleRouteProps=
	{
		role?:string;
		roles?:string[];
		children:Element|null;
	}

const RoleRoute=({role,roles,children}:TRoleRouteProps):typeof children=>
{
	let location=useLocation();
	const isAuthenticated=CookieDealer.getCookie("UserJWT").isPresent();
	const userHasRequiredRole=false;
	// roles.includes(CookieDealer.getCookie("role").getValue());
	// if(!isAuthenticated)
	// {
	// 	return <Navigate to={"/"}/>;//<Navigate to="/login" state={{from:location}}/>;
	// }
	// if(isAuthenticated&& !userHasRequiredRole)
	// {
	// 	return <Navigate to={"/"}/>; // build your own access denied page (sth like 404)
	// }
	return children;
};

// const RoleRoute=({role="user",roles=["user"],props}:TRoleRouteProps)=>
// !roles.length||roles.includes(role)
// ?<Route {...props}/>
// :<Link to="/"/>;

export default RoleRoute;
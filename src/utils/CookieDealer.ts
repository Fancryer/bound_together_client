module CookieDealer
{
	export class CookieDealer
	{
		private static cookieCache:{[name:string]:Cookie}={};
		public static getCookie=(name:string):Cookie=>
		{
			if(CookieDealer.cookieCache[name])
			{
				return CookieDealer.cookieCache[name];
			}
			const cookieValue=document.cookie.replace
			(
				new RegExp
				(
					`(?:^|; )${name.replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")}=([^;]*)`
				),
				"$1"
			);
			const cookie=new Cookie(name,cookieValue);
			CookieDealer.cookieCache[name]=cookie;
			return cookie;
		};

		public static setCookie=({getName,getValue}:Cookie):Cookie=>
		{
			document.cookie=getName()+"="+getValue();
			return CookieDealer.cookieCache[getName()]=new Cookie(getName(),getValue());
		};

		public static deleteCookie=(name:string):void=>
		{
			document.cookie=`${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
			delete CookieDealer.cookieCache[name];
		};

		public static getAllCookies=():Cookie[]=>
		{
			const cookies=document.cookie.split(';'),allCookies:Cookie[]=[];
			for(const cookie of cookies)
			{
				const [cookieName,cookieValue]=cookie.split('=');
				const newCookie=new Cookie(cookieName.trim(),cookieValue.trim());
				allCookies.push(newCookie);
			}
			return allCookies;
		};

		public static clearAllCookies():void
		{
			const cookies=document.cookie.split(';');
			for(const cookie of cookies)
				document.cookie=`${cookie.split('=')[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
			CookieDealer.cookieCache={};
		}
	}

	class Cookie
	{
		constructor(private readonly name:string,private readonly value:string){}

		public getName=()=>this.name;
		public getValue=()=>this.value;
		public isPresent=()=>!!this.value;
	}
}

export default CookieDealer.CookieDealer;
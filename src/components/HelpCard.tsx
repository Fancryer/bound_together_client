const HelpCard=({name,src,href=`https://www.google.com/search?q=${name?.replace(" ","+")}`}:{name?:string,src?:string,href?:string})=>
{
	return <div className="HelpCard">
		<img alt={name} src={src}/>
		{name}
		<a href={href} className={"Link"}>Подробнее</a>
	</div>;
}

export default HelpCard;
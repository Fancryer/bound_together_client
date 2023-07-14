module CustomEntityModule
{
	type TCustomType=boolean
	                 |Date
	                 |number
	                 |string
	                 |CustomEntity;

	type NewsContent=
		{
			content:string;
			isFileReference:boolean;
		};

	const postFile=async(content:string)=>
	{
		return await fetch("https://example.com",
		                        {
			                        method:"POST",
			                        body:content
		                        })
			.then
			(
				ref=>ref.text()
			);
	}

	export class CustomEntity
	{
	}
}

export default CustomEntityModule.CustomEntity;
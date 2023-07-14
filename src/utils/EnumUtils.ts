export function normalizeEnumValues<T extends string>(enumObj:Record<string,T>):Record<T,T>
{
	const normalizedEnum:Record<T,T>={} as Record<T,T>;
	for(const key in enumObj)
	{
		if(Object.prototype.hasOwnProperty.call(enumObj,key))
		{
			const value=enumObj[key as keyof typeof enumObj];
			normalizedEnum[value]=value;
		}
	}
	return normalizedEnum;
}
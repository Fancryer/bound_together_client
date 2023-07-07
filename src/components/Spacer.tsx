type TSpacerProps=
	{
		height?:number
	}

const Spacer=({height=25}:TSpacerProps)=>
	<hr style={{
		height:height+"px",
		width:"100%",
		border:"none",
		margin:0,
		padding:0
	}}/>

export default Spacer;
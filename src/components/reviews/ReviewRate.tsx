import {useState} from "react";

type TReviewRateProps=
	{
		rate:number,
		maxValue:number,
		maxStarAmount:number
	}

const ReviewRate=({rate,maxValue,maxStarAmount}:TReviewRateProps)=>
{
	const [score,setScore]=useState
	(
		()=>
		{
			let sc=Math.round(rate*maxStarAmount/maxValue)
			console.log(sc);
			return sc;
		}
	);
	return <div className={"ReviewRate"}>
		{
			"★".repeat(score)+"☆".repeat(maxStarAmount-score)
			// Array.from
			//      (
			// 	     {length:maxStarAmount},
			// 	     (_,i)=><i className={"Star"}>{score>i?"★":"☆"}</i>
			//      )
		}
	</div>;
};

export default ReviewRate;
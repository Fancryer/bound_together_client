import ReviewRate        from "./reviews/ReviewRate";
import BoundTogetherLogo from "../bound-together-high-resolution-logo-black-on-transparent-background.png";
import Spacer            from "./Spacer";

export type TReview=
	{
		userName:string,
		theme:string,
		date:string,
		requestNumber:number,
		text?:string|null,
		rate:number
	}

const ReviewCard=({date,rate,requestNumber,text,theme,userName}:TReview)=>
{
	//const [reviewInfo,setReviewInfo]=useState<TReview>(fetchReviewInfo(id));
	return <div className={"ReviewCard"}>
		<div className={"ReviewHeader"}>
			<div className={"ReviewTheme"}>{theme}</div>
			<Spacer height={10}/>
			<div className={"ReviewUserName"}>{userName}</div>
			<div className={"ReviewDate"}>{date}</div>
		</div>
		<Spacer/>
		<div className={"ReviewText"}>{text}</div>
		<Spacer/>
		<div style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"space-between"}}>
			<div className={"ReviewNumber"}>{requestNumber}</div>
			<ReviewRate rate={rate} maxStarAmount={10} maxValue={10}/>
		</div>
	</div>;
}

export default ReviewCard;
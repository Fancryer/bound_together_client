import Page                 from "../components/Page";
import Navbar               from "../components/Navbar";
import {FormEvent,useState} from "react";
import Footer               from "../components/Footer";
import RequestForm          from "../components/forms/RequestForm";
import Input                from "../components/forms/Input";
import TextArea             from "../components/forms/TextArea";
import CheckBox             from "../components/forms/CheckBox";
import HelpCard             from "../components/HelpCard";
import Spacer               from "../components/Spacer";
import {LoremIpsum}         from "lorem-ipsum";
import 'react-alice-carousel/lib/alice-carousel.css';
import ReviewCarousel       from "../components/ReviewCarousel";
import Spoiler              from "../components/Spoiler";
import ReviewRate           from "../components/reviews/ReviewRate";
import Contacts             from "../components/Contacts";
import Logo                 from "../bound-together-high-resolution-logo-black-on-transparent-background.png";

const MainPage=()=>
{
	const handleSubmit=(e:FormEvent<HTMLFormElement>)=>
	{
		e.preventDefault();
	}
	const [name,setName]=useState("");
	const [phone,setPhone]=useState("");
	const [theme,setTheme]=useState("");
	const [problem,setProblem]=useState("");
	const [checked,setChecked]=useState(false);
	const lorem=new LoremIpsum(undefined,undefined,"\n");
	return <Page>
		<Navbar/>
		<Spacer/>
		<div className={"MainPageContent"}>
			<section id={"about"}/>
			<div className={"About"}>
				<div id={"ProjectName"}>Мы вместе</div>
				<img src={Logo} alt={"Logo"} style={{width:"450px",height:"450px"}}/>
				<Spacer/>
				<RequestForm handleSubmit={handleSubmit}>
					<label form={"request"}>Оставить заявку</label>
					<Input setValue={setName} placeholder={"Имя"} name={"Имя"} style={{width:"100%"}} form={"request"}/>
					<Input
						setValue={setPhone}
						placeholder={"Номер телефона"}
						name={"Номер телефона"}
						style={{width:"100%"}}
						form={"request"}
						className={"Input"}
					/>
					<Input setValue={setTheme} placeholder={"Тема"} name={"Тема"} style={{width:"100%"}}
					       form={"request"}/>
					<TextArea
						setValue={setProblem}
						placeholder={"Проблема"}
						name={"Проблема"}
						form={"request"}
						style={{resize:"none",width:"100%"}}
					/>
					<CheckBox
						setValue={setChecked}
						name={"Я даю согласие на обработку своих персональных данных"}
						form={"request"}
					/>
					<input type={"submit"} value={"Отправить"} disabled={true}/>
				</RequestForm>
				<Spacer/>
				<div id={"About"} style={{wordWrap:"break-word",width:"90%",textAlign:"justify"}}>
					{
						lorem.generateParagraphs(24)
						     .split("\n")
						     .map((str,i)=>
							          (i%7)
							          ?str
							          :<p>{str}</p>)
					}
				</div>
			</div>
			<Spacer/>
			<section id={"help"}/>
			<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
				<HelpCard name={"Адресная помощь"}/>
				<HelpCard name={"Психологическая помощь"}/>
				<HelpCard name={"Гуманитарная помощь"}/>
				<HelpCard name={"Иная помощь"}/>
			</div>
			<Spacer/>
			<section id={"reviews"}/>
			<Spoiler name={"Карусель отзывов"} children={<ReviewCarousel/>}/>
			<Spacer/>
			{
				/*
				userName:string,
				theme:string,
				date:string,
				requestNumber:number,
				text?:string|null,
				rate:number
				*/
			}
			<RequestForm handleSubmit={handleSubmit}>
				<label form={"request"}>Оценить помощь</label>
				<Input setValue={setName} placeholder={"Имя"} name={"Имя"} style={{width:"100%"}} form={"request"}/>
				<Input
					setValue={setPhone}
					placeholder={"Проблема"}
					name={"Проблема"}
					style={{width:"100%"}}
					form={"request"}
					className={"Input"}
				/>
				<Input setValue={setTheme} placeholder={"Тема"} name={"Тема"} style={{width:"100%"}} form={"request"}/>
				<TextArea
					setValue={setProblem}
					placeholder={"Проблема"}
					name={"Проблема"}
					form={"request"}
					style={{resize:"none",width:"100%"}}
				/>
				<label form={"request"}>Оценка<ReviewRate rate={10} maxValue={10} maxStarAmount={10}/></label>
				<input type={"submit"} value={"Оставить отзыв"} disabled={true}/>
			</RequestForm>
			<Spacer/>
			<section id={"contacts"}/>
			<Contacts
				contacts=
					{
						[
							{
								name:"John Doe",
								email:"john.doe@example.com",
								phone:"123-456-7890"
							},
							{
								name:"Jane Smith",
								email:"jane.smith@example.com",
								phone:"987-654-3210"
							},
							{
								name:"Alice Johnson",
								email:"alice.johnson@example.com",
								phone:"555-123-4567"
							}
						]
					}
			/>
		</div>
		<Spacer/>
		<Footer/>
	</Page>;
}
export default MainPage
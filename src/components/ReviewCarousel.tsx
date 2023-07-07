import ReviewCard,{TReview} from "./ReviewCard";

const reviews:TReview[]=
	[
		{
			"userName":"Alyosha Faucett",
			"date":"5/23/2023",
			"requestNumber":1,
			"theme":"Charity",
			"text":"The charity event was well-organized and the volunteers did a great job.",
			"rate":2
		},
		{
			"userName":"Sallie Milborn",
			"date":"5/12/2023",
			"requestNumber":2,
			"theme":"Supply request gone wrong",
			"text":"Yo, I'd love to review it higher, but we haven't received anything.",
			"rate":3
		},
		{
			"userName":"Jen Hamm",
			"date":"5/18/2023",
			"requestNumber":3,
			"theme":"Supply request",
			"text":"The supplies arrived on time and were exactly what we needed.",
			"rate":4
		},
		{
			"userName":"Marietta Meaddowcroft",
			"date":"10/20/2022",
			"requestNumber":4,
			"theme":"Tretinoin",
			"text":"The Tretinoin cream worked wonders for my skin. Highly recommended!",
			"rate":5
		},
		{
			"userName":"Leta Yellowlea",
			"date":"12/11/2022",
			"requestNumber":5,
			"theme":"HYDROQUINONE",
			"text":"The HYDROQUINONE product helped lighten my dark spots effectively.",
			"rate":6
		},
		{
			"userName":"Jeanine Calltone",
			"date":"10/31/2022",
			"requestNumber":6,
			"theme":"Potassium Sulfate, Salicylic Acid, Silicon Dioxide, Calcium Sulfate Anhydrous, Quinine Sulfate, Allylthiourea",
			"text":"The combination of Potassium Sulfate, Salicylic Acid, Silicon Dioxide, Calcium Sulfate Anhydrous, Quinine Sulfate, and Allylthiourea worked wonders for my plants.",
			"rate":7
		},
		{
			"userName":"Jean Wands",
			"date":"6/26/2023",
			"requestNumber":7,
			"theme":"Lamotrigine",
			"text":"Lamotrigine has been a life-changer for me. It effectively manages my seizures.",
			"rate":8
		},
		{
			"userName":"Karoly Wildor",
			"date":"7/18/2022",
			"requestNumber":8,
			"theme":"Acetaminophen, Doxylamine succinate, Phenylephrine hydrochloride",
			"text":"The combination of Acetaminophen, Doxylamine succinate, and Phenylephrine hydrochloride provided fast relief from my cold symptoms.",
			"rate":9
		},
		{
			"userName":"Benedicto De La Hay",
			"date":"5/27/2023",
			"requestNumber":9,
			"theme":"Aluminum Zirconium Tetrachlorohydrex GLY",
			"text":"The Aluminum Zirconium Tetrachlorohydrex GLY deodorant kept me fresh and odor-free all day.",
			"rate":10
		},
		{
			"userName":"Rochette Gircke",
			"date":"3/21/2023",
			"requestNumber":10,
			"theme":"Promethazine Hydrochloride and Codeine Phosphate",
			"text":"Québec",
			"rate":1
		},
		{
			"userName":"Hardy Camocke",
			"date":"6/22/2023",
			"requestNumber":11,
			"theme":"alprazolam",
			"text":"Leiria",
			"rate":2
		},
		{
			"userName":"Brandy Lapenna",
			"date":"6/2/2023",
			"requestNumber":12,
			"theme":"Alprazolam",
			"text":null,
			"rate":3
		},
		{
			"userName":"Loella Winsbury",
			"date":"9/9/2022",
			"requestNumber":13,
			"theme":"Leucovorin Calcium",
			"text":null,
			"rate":4
		},
		{
			"userName":"Shandie Duckhouse",
			"date":"12/16/2022",
			"requestNumber":14,
			"theme":"ondansetron hydrochloride",
			"text":null,
			"rate":5
		},
		{
			"userName":"Melly Pummery",
			"date":"11/5/2022",
			"requestNumber":15,
			"theme":"nitroglycerin",
			"text":null,
			"rate":6
		},
		{
			"userName":"Kelli Valens-Smith",
			"date":"2/2/2023",
			"requestNumber":16,
			"theme":"SODIUM CHLORIDE, POTASSIUM CHLORIDE, AND CALCIUM CHLORIDE",
			"text":null,
			"rate":7
		},
		{
			"userName":"Tilly Haylock",
			"date":"2/4/2023",
			"requestNumber":17,
			"theme":"Ethyl Alcohol",
			"text":null,
			"rate":8
		},
		{
			"userName":"Bernardine Walding",
			"date":"5/28/2023",
			"requestNumber":18,
			"theme":"DIPHENHYDRAMINE HYDROCHLORIDE",
			"text":null,
			"rate":9
		},
		{
			"userName":"Trina Townsend",
			"date":"8/18/2022",
			"requestNumber":19,
			"theme":"acamprosate calcium",
			"text":null,
			"rate":10
		},
		{
			"userName":"Wrennie Hugues",
			"date":"10/18/2022",
			"requestNumber":20,
			"theme":"Morphine Sulfate",
			"text":null,
			"rate":1
		},
		{
			"userName":"Giorgia Cawdery",
			"date":"10/15/2022",
			"requestNumber":21,
			"theme":"morphine sulfate",
			"text":null,
			"rate":2
		},
		{
			"userName":"Jeremy Von Hindenburg",
			"date":"7/29/2022",
			"requestNumber":22,
			"theme":"DIVALPROEX SODIUM",
			"text":"Setúbal",
			"rate":3
		},
		{
			"userName":"Currey Baseggio",
			"date":"8/9/2022",
			"requestNumber":23,
			"theme":"TRIPROLIDINE HYDROCHLORIDE",
			"text":null,
			"rate":4
		},
		{
			"userName":"Vinnie Lorie",
			"date":"4/13/2023",
			"requestNumber":24,
			"theme":"Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone",
			"text":null,
			"rate":5
		},
		{
			"userName":"Helyn Emmerson",
			"date":"11/30/2022",
			"requestNumber":25,
			"theme":"PREGABALIN",
			"text":null,
			"rate":6
		},
		{
			"userName":"Birdie Brown",
			"date":"6/6/2023",
			"requestNumber":26,
			"theme":"Ethyl Alcohol",
			"text":"Braga",
			"rate":7
		},
		{
			"userName":"Oliviero Naton",
			"date":"9/11/2022",
			"requestNumber":27,
			"theme":"TITANIUM DIOXIDE",
			"text":null,
			"rate":8
		},
		{
			"userName":"Gerladina Kernley",
			"date":"2/11/2023",
			"requestNumber":28,
			"theme":"Titanium Dioxide",
			"text":null,
			"rate":9
		},
		{
			"userName":"Bernardina Ashwood",
			"date":"7/20/2022",
			"requestNumber":29,
			"theme":"Aluminum Zirconium Tricholorohydrex GLY",
			"text":null,
			"rate":10
		},
		{
			"userName":"Brande Zorzoni",
			"date":"9/24/2022",
			"requestNumber":30,
			"theme":"Ketorolac Tromethamine",
			"text":null,
			"rate":1
		},
		{
			"userName":"Kass Mobius",
			"date":"12/16/2022",
			"requestNumber":31,
			"theme":"midodrine hydrochloride",
			"text":null,
			"rate":2
		},
		{
			"userName":"Cathee Worledge",
			"date":"7/6/2022",
			"requestNumber":32,
			"theme":"TRICLOSAN",
			"text":null,
			"rate":3
		},
		{
			"userName":"Ardath Santino",
			"date":"7/26/2022",
			"requestNumber":33,
			"theme":"GLYCERIN",
			"text":"Veracruz Llave",
			"rate":4
		},
		{
			"userName":"Arabel Gatling",
			"date":"12/20/2022",
			"requestNumber":34,
			"theme":"CADMIUM SULPHURATUM",
			"text":"Oslo",
			"rate":5
		},
		{
			"userName":"George Tocher",
			"date":"4/25/2023",
			"requestNumber":35,
			"theme":"Ibuprofen",
			"text":null,
			"rate":6
		},
		{
			"userName":"Raymond Goodfellowe",
			"date":"2/26/2023",
			"requestNumber":36,
			"theme":"Bismuth Subsalicylate",
			"text":null,
			"rate":7
		},
		{
			"userName":"Merrick Stranger",
			"date":"3/18/2023",
			"requestNumber":37,
			"theme":"Burr Oak",
			"text":null,
			"rate":8
		},
		{
			"userName":"Vivienne Venour",
			"date":"8/10/2022",
			"requestNumber":38,
			"theme":"AESCULUS HIPPOCASTANUM, HAMAMELIS VIRGINIANA, PAEONIA OFFICINALIS, COLLINSONIA CANADENSIS, TEUCRIEUM MARUM, VERBASCUM THAPSUS, BOLDO, SULPHUR, ALOE SOCOTRINA",
			"text":null,
			"rate":9
		},
		{
			"userName":"Karyn Snoddin",
			"date":"10/21/2022",
			"requestNumber":39,
			"theme":"Simvastatin",
			"text":null,
			"rate":10
		},
		{
			"userName":"Charmian Huckster",
			"date":"2/9/2023",
			"requestNumber":40,
			"theme":"Venlafaxine Hydrochloride",
			"text":null,
			"rate":1
		},
		{
			"userName":"Annabel Eddies",
			"date":"8/26/2022",
			"requestNumber":41,
			"theme":"Divalproex Sodium",
			"text":null,
			"rate":2
		},
		{
			"userName":"Matthias Klaus",
			"date":"2/25/2023",
			"requestNumber":42,
			"theme":"Echinacea Essence",
			"text":null,
			"rate":3
		},
		{
			"userName":"Massimiliano Safe",
			"date":"6/28/2023",
			"requestNumber":43,
			"theme":"Levofloxacin",
			"text":"Saskatchewan",
			"rate":4
		},
		{
			"userName":"Kiersten Warratt",
			"date":"7/7/2022",
			"requestNumber":44,
			"theme":"Acetaminophen, Chlorpheniramine Maleate, Dextromethorphan HBr, Phenylephrine HCl",
			"text":null,
			"rate":5
		},
		{
			"userName":"Rhiamon Radmore",
			"date":"4/30/2023",
			"requestNumber":45,
			"theme":"Tretinoin",
			"text":"Lisboa",
			"rate":6
		},
		{
			"userName":"Sim Lark",
			"date":"10/17/2022",
			"requestNumber":46,
			"theme":"PRAVASTATIN SODIUM",
			"text":null,
			"rate":7
		},
		{
			"userName":"Farrand Josephy",
			"date":"4/11/2023",
			"requestNumber":47,
			"theme":"Diphenhydramine Hydrochloride",
			"text":"Rhône-Alpes",
			"rate":8
		},
		{
			"userName":"Marni Sowrah",
			"date":"11/10/2022",
			"requestNumber":48,
			"theme":"Loratadine",
			"text":null,
			"rate":9
		},
		{
			"userName":"Etheline McMarquis",
			"date":"10/24/2022",
			"requestNumber":49,
			"theme":"Voriconazole",
			"text":null,
			"rate":10
		},
		{
			"userName":"Giordano Whight",
			"date":"1/12/2023",
			"requestNumber":50,
			"theme":"OCTINOXATE and TITANIUM DIOXIDE",
			"text":null,
			"rate":1
		}
	]

const ReviewCarousel=()=>
{
	return <div className={"ReviewCarousel"}>
		{
			reviews.map
			       (
				       (review,id)=>
					       <ReviewCard
						       rate={review.rate}
						       userName={review.userName}
						       date={review.date}
						       requestNumber={review.requestNumber}
						       theme={review.theme}
						       text={review.text}
						       key={id}
					       />
			       )
		}
	</div>;
}

export default ReviewCarousel;
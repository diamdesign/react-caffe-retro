import { Navbar } from "./Navbar";
import { SectionHot } from "./SectionHot";
import { SectionJuicy } from "./SectionJuicy";
import { SectionCosy } from "./SectionCosy";

export function App() {
	const contentArray = [
		{
			id: 1,
			header: "Hot",
			text1: "Hot freshly ground black coffe or a cup of exquisite tea?",
			text2: "We give you that perfect cup every time.",
			list: [
				{
					id: 1,
					name: "Mocha latte",
					price: "7.50",
				},
				{
					id: 2,
					name: "Caffe Formaggio",
					price: "5.00",
				},
				{
					id: 3,
					name: "Espresso",
					price: "3.50",
				},
				{
					id: 4,
					name: "Chai Verde Latte",
					price: "5.50",
				},
			],
		},
		{
			id: 2,
			header: "Juicy",
			text1: "Ripe fruit - freshly squeezed",
			text2: "It's as simple as that. Chunky or smooth - it's your choice.",
			list: [
				{
					id: 1,
					name: "Branched Apricots",
					price: "4.20",
				},
				{
					id: 2,
					name: "Deep Rasberries",
					price: "3.50",
				},
				{
					id: 3,
					name: "Smooth Oranges",
					price: "6.50",
				},
			],
		},
		{
			id: 3,
			header: "Cosy",
			text1: "Hang around. Enjoy the settings.",
			text2: "Use our fast WiFi. Borrow a newspaper or a novel.",
			list: [
				{
					id: 1,
					name: "Mon-Sun",
					price: "8am - 11pm",
				},
				{
					id: 2,
					name: "Caffe Retro",
					price: "Canto VI",
				},
				{
					id: 3,
					name: "0123-45 67 89",
					price: "caffe@lorem.pge",
				},
			],
		},
	];

	return (
		<>
			<Navbar />
			<SectionHot contentArray={contentArray} />
			<SectionJuicy contentArray={contentArray} />
			<SectionCosy contentArray={contentArray} />
		</>
	);
}

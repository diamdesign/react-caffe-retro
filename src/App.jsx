import { Navbar } from "./Navbar";
import { Sections } from "./Sections";
import data from "./data/data.json";

export function App() {
	return (
		<>
			<Navbar data={data} />
			{data.map((item) => (
				<Sections key={item.id} item={item} />
			))}
		</>
	);
}

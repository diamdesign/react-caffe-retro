export function Sections({ item }) {
	const array = item;
	const listing = array.list;

	return (
		<section id={array.header.toLowerCase()}>
			<h1>{array.header}</h1>
			<h2>{array.text1}</h2>
			<h2>{array.text2}</h2>
			<ul>
				{listing.map((list) => {
					return (
						<div key={list.id}>
							<li>{list.name}</li>
							<li>€{list.price}</li>
						</div>
					);
				})}
			</ul>
		</section>
	);
}

export default Sections;

export function Navbar() {
	const links = [
		{
			id: 1,
			name: "Hot",
			path: "#hot",
		},
		{
			id: 2,
			name: "Juicy",
			path: "#juicy",
		},
		{
			id: 3,
			name: "Cosy",
			path: "#cosy",
		},
	];
	return (
		<nav>
			{links.map((link) => (
				<a key={link.id} href={link.path}>
					{link.name}
				</a>
			))}
		</nav>
	);
}

export default Navbar;

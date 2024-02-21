export function Navbar({ data }) {
	return (
		<nav>
			{data.map((link) => (
				<a key={link.id} href={"#" + link.header.toLowerCase()}>
					{link.header}
				</a>
			))}
		</nav>
	);
}

export default Navbar;

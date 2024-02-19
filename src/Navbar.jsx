export function Navbar({ contentArray }) {
	const links = contentArray;
	return (
		<nav>
			{links.map((link) => (
				<a key={link.id} href={"#" + link.header.toLowerCase()}>
					{link.header}
				</a>
			))}
		</nav>
	);
}

export default Navbar;

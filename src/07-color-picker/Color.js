export default function Color({ hex, name, backgroundColor }) {
	function handleSubmit(e) {
		e.preventDefault();
		return backgroundColor(hex);
	}
	return (
		<button
			className="color-square"
			style={{ backgroundColor: hex }}
			onClick={handleSubmit}
		>
			<h2>{name}</h2>
		</button>
	);
}

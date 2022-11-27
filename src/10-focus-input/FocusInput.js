export default function FocusInput() {
	return (
		<div>
			<label htmlFor="focused-input">Focus me on page load!</label>
			<input
				name="focused-input"
				autoFocus
			></input>
		</div>
	);
}

import { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
	const [windowEvent, setWindowEvent] = useState(false);
	function runAlert() {
		if (windowEvent) {
			alert("click detected");
		} else {
			return null;
		}
	}

	return (
		<div onDoubleClick={runAlert}>
			<button onClick={() => setWindowEvent((prevState) => !prevState)}>
				Toggle Window Event
			</button>
			{windowEvent && <WindowEvent />}
		</div>
	);
}

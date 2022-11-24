import React, { useState } from "react";

export default function DarkMode() {
	const [isActive, setIsActive] = useState(false);
	function changeToDark() {
		setIsActive((current) => !current);
	}

	return (
		<div className={isActive ? "dark-mode page" : "page "}>
			<button
				className="dark-mode-button"
				onClick={changeToDark}
			>
				Dark Mode
			</button>
			<button
				className="light-mode-button"
				onClick={changeToDark}
			>
				Light Mode
			</button>
		</div>
	);
}

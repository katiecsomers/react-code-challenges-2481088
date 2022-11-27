import { useState } from "react";
import axios from "axios";

export default function DogPics() {
	const [url, setUrl] = useState(
		"https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
	);

	function searchDogs() {
		axios
			.get(`https://dog.ceo/api/breeds/image/random`)

			.then((data) => {
				console.log(data);
				setUrl(data.data.message);
			})
			.catch((error) => console.error(error));
	}

	return (
		<div className="dog-pics">
			<img
				src={url}
				alt="Dog pics"
			/>
			<button onClick={searchDogs}>🐶</button>
		</div>
	);
}

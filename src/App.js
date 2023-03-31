import "./styles.css";
import { useState } from "react";

export default function App() {
	const [inputNumber, setInputNumber] = useState(0);
	const [result, setResult] = useState(0);

	const inputNumberHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value !== "") {
			setInputNumber(e.target.value);
		}
	};

	function handleInput() {
		//please put your logic here
		const input = Number(inputNumber);
		const reverse = Number(inputNumber.split("").reverse().join(""));
		console.log(input, reverse);
		setResult(Math.abs(reverse - input));
	}

	return (
		<div className="App">
			<div>
				Number:{" "}
				<input
					type="number"
					name="inputNumber"
					value={inputNumber}
					onChange={inputNumberHandler}
				/>
				<button onClick={handleInput}>Submit</button>
			</div>
			<div>Result: {result}</div>
		</div>
	);
}

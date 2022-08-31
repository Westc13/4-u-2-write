import { memo, useEffect } from "react";

const Prompts = ({ prompts, POTD, setPOTD }) => {
	useEffect(() => {
		// using data structure that firebase makes -- Object.keys is a js fn that returns an array of the keys of an object. because firebase enforces objects, we use this to get to the first key (aka the current prompt)
		setPOTD(prompts[Object.keys(prompts)[0]]);
		// comment to make eslint not angry with us:
	}, [prompts, POTD]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="Main__prompts">
			<h1>Prompt of the day:</h1>
			<h2>{POTD?.prompt}</h2>
		</div>
	);
};
export default memo(Prompts);

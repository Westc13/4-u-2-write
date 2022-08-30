import { memo, useEffect } from "react";

const Prompts = ({ prompts, POTD, setPOTD }) => {
	useEffect(() => {
		setPOTD(prompts[Object.keys(prompts)[0]]);
	}, [prompts, POTD]);

	return (
		<div className="prompts">
			<h2>Prompt of the day:</h2>
			<h2>{POTD.prompt}</h2>
		</div>
	);
};
export default memo(Prompts);

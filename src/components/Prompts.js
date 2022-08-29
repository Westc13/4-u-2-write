import { memo } from "react";

const Prompts = ({ prompts }) => {
	return (
		<div className="prompts">
			<h2>"{prompt[Object.keys(prompts)[0]]}"</h2>
		</div>
	);
};
export default memo(Prompts);

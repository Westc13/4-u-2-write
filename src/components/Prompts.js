import { memo } from "react";

const Prompts = ({ POTD }) => {
  console.log("wow we are so good at getting lost");
  return (
    <div className="prompts">
      <h2>"{POTD}"</h2>
    </div>
  );
};
export default memo(Prompts);

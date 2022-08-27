const Prompts = ({ POTD, prompts }) => {
  console.log(prompts);
  return (
    <div className="prompts">
      <h2>"{POTD}"</h2>
    </div>
  );
};
export default Prompts;

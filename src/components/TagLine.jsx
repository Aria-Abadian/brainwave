import Brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {Brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {Brackets("right")}
    </div>
  );
};

export default TagLine;

import { useRef, useState } from "react";

import IconPlus from "../../public/images/svg/icon-add.svg";

const Accordion = ({
  accordion_content,
  accordion_heading,
  className = "",
}) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      className={`font-400 text-20 font-cambon leading-6 lg:leading-7 text-primary-100 border-b  border-gray-300 py-[14px] ${
        clicked ? "active" : ""
      } ${className} `}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        {accordion_heading}
        <span className="control">
          {clicked ? (
            <div className="w-4 h-[4px] bg-primary"></div>
          ) : (
            <IconPlus />
          )}
        </span>
      </div>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer pt-4 text-18 text-black">
          {accordion_content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

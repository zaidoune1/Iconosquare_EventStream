import React from "react";

type TNavigationButtons = {
  btnName: string | JSX.Element;
  navigationBtn: () => void;
  className?: string;
  iconeDescription?: string;
};

function NavigationButtons({
  className,
  btnName,
  navigationBtn,
  iconeDescription,
}: TNavigationButtons) {
  return (
    <div className="flex items-center my-3 ">
      <button
        className={!className ? "btn" : className}
        onClick={navigationBtn}
      >
        {btnName}
      </button>
      <span className="text-sm  font-black"> {iconeDescription} </span>
    </div>
  );
}

export default NavigationButtons;

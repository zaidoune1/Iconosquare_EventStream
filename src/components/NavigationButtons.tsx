import React from "react";

type TNavigationButtons = {
  btnName: string;
  navigationBtn: () => void;
};

function NavigationButtons({ btnName, navigationBtn }: TNavigationButtons) {
  return (
    <div>
      <button className="btn" onClick={navigationBtn}>
        {btnName}
      </button>
    </div>
  );
}

export default NavigationButtons;

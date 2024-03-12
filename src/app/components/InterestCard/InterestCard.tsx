import React from "react";
import { useSelector } from "react-redux";

import { switchColor } from "app/utils/constants";
import { InterestsProps, RootState } from "app/interfaces";
import "./InterestCard.scss";

const InterestCard: React.FC<InterestsProps> = ({ icon, text }) => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);
  return (
    <div className="ic-item">
      {icon}
      <p className={`${changeColor}`}>{text}</p>
    </div>
  );
};

export { InterestCard };

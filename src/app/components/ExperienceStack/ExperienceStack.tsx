import React from "react";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import { useSelector } from "react-redux";

import { RootState } from "app/interfaces";
import { switchBg, switchColor } from "app/utils/constants";
import { ExperienceStackProps } from "app/interfaces";
import "./ExperienceStack.scss";

const ExperienceStack: React.FC<ExperienceStackProps> = ({
  title,
  date,
  company,
  companyUrl,
  list,
}) => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);
  return (
    <div className="xstack">
      <div className="xstack-header">
        <div className="xstack-header-job">
          <FilterCenterFocusIcon className={`${changeColor}`} />
          <h3 className={`${changeColor}`}>{title}</h3>
        </div>
        <div className="xstack-header-details">
          <a href={companyUrl}>{company}</a>
          <span className={`${changeColor}`}>({date})</span>
        </div>
      </div>
      <div className="xstack-body">
        <ul>
          {list.map((item, index) => (
            <li className={`${changeColor}`} key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ExperienceStack };

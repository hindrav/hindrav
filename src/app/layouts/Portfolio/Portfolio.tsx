import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "app/interfaces";
import { switchBg } from "app/utils/constants";
import { ProjectItem } from "app/components/ProjectItem/ProjectItem";
import p1 from "app/assets/images/p1.png";
import p2 from "app/assets/images/fbh.png";
import p3 from "app/assets/images/rickandmorty.png";
import "./Portfolio.scss";

const Portfolio = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeBg = switchBg(mode);

  return (
    <div className={`pf ${changeBg}`}>
      <div className="pf-container">
        <div className="span-title">
          <span>Projects</span>
        </div>
        <ProjectItem
          title="Mares de papel"
          description="Platform developed for Mazarrón City Council, Spain, to manage events using QR-coded tickets for attendance control. It was built with React, Django, and PostgreSQL."
          projectUrl="https://maresdepapel.com"
          imageUrl={p1}
        />
        <ProjectItem
          title="Fixing Broken Houses"
          description="Platform developed for a major design, remodeling, and construction company in Texas. It was built with React."
          projectUrl="https://fixingbrokenhouses.com/"
          imageUrl={p2}
        />
        <ProjectItem
          title="Rick and Morty Characters"
          description="Platform created for educational purposes, consumes the official Rick and Morty API, made with ReactJS and Redux."
          projectUrl="https://rickandmorty-api-react.web.app"
          imageUrl={p3}
        />
      </div>
    </div>
  );
};

export { Portfolio };

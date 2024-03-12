import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { switchColor } from "app/utils/constants";
import { RootState, ProjectItemProps } from "app/interfaces";
import "./ProjectItem.scss";

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  projectUrl,
  imageUrl,
}) => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);
  return (
    <div className="pi">
      <div className="pi-body">
        <img src={imageUrl} alt="Project image" />
      </div>
      <div className="pi-header">
        <h4 className={`${changeColor}`}>{title}</h4>
        <p className={`${changeColor}`}>{description}</p>
        <Button variant="contained">
          <a href={projectUrl} className={`${changeColor}`}>View project</a>
        </Button>
      </div>
    </div>
  );
};

export { ProjectItem };

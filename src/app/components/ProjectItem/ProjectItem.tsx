import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Newspaper, Tv } from "@mui/icons-material";

import { switchColor } from "app/utils/constants";
import { RootState, ProjectItemProps } from "app/interfaces";
import "./ProjectItem.scss";
import { BasicModal } from "../BasicModal/BasicModal";

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  projectUrl,
  imageUrl,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="pi">
      <div className="pi-body">
        <img src={imageUrl} alt="Project image" />
      </div>
      <div className="pi-header">
        <h4 className={`${changeColor}`}>{title}</h4>
        <p className={`${changeColor}`}>{description}</p>
        <Button variant="contained">
          <a href={projectUrl} className={`${changeColor}`}>
            View project
          </a>
        </Button>
        {title === "Mares de papel" && (
          <Button variant="contained" style={{marginLeft: 15}} onClick={handleOpenModal}>
            <Link style={{ fontSize: "2.5rem", marginRight: ".5rem" }} /> <Tv style={{ fontSize: "2.5rem", marginRight: ".5rem" }}/> <Newspaper style={{ fontSize: "2.5rem", marginRight: ".5rem" }}/>
          </Button>
        )}
      </div>
      <BasicModal 
      open={openModal} 
      onClose={handleCloseModal}
      title="Mares de papel"
      text="This project was televised and published in Spain newspapers."
      urlOne="https://www.mazarronhoy.com/noticias/2021/07/10/mares-papel-incorpora-codigo-qr.asp"
      urlTwo="https://lavozdemazarron.com/index.php/noticias/4730-codigos-qr-para-las-entradas-de-mares-de-papel"
      />
    </div>
  );
};

export { ProjectItem };
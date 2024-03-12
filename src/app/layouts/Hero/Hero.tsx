import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GitHub, Instagram, KeyboardArrowDownOutlined, LinkedIn, WhatsApp } from "@mui/icons-material";

import { RootState } from "app/interfaces";
import { switchBg, switchColor } from "app/utils/constants";
import profilePicture from "app/assets/images/profile.jpeg";
import "./Hero.scss";

const Hero = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeBg = switchBg(mode);
  const changeColor = switchColor(mode);

  return (
    <div className={`hero ${changeBg}`}>
      <figure className="hero-header">
        <img src={profilePicture} alt="Profile Picture" />
      </figure>
      <div className="hero-body">
        <div className="hero-body-text">
          <h1 className={`${changeColor}`}>Hindra Estrada</h1>
          <p className={`${changeColor}`}>Software Developer Engineer</p>
        </div>
        <div className="hero-body-sm">
          <Link className={`${changeColor}`} to="https://instagram.com/hindrav_"><Instagram /></Link>
          <Link className={`${changeColor}`} to="https://github.com/hindrav"><GitHub /></Link>
          <Link className={`${changeColor}`} to="https://linkedin.com/in/hindrav"><LinkedIn /></Link>
          <Link className={`${changeColor}`} to="https://wa.link/qwajkq"><WhatsApp /></Link>
        </div>
      </div>
      <div className="hero-footer">
        <a href="#resume" className={`${changeColor}`}><KeyboardArrowDownOutlined /></a>
      </div>
    </div>
  );
};

export { Hero };

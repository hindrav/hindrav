import { Box, Button, Slide } from "@mui/material";
import profilepicture from "app/assets/images/profilepicture.png";
import {
  GitHub,
  // Grade,
  Instagram,
  LegendToggle,
  LinkedIn,
  Person,
  SettingsEthernet,
  WhatsApp,
} from "@mui/icons-material";
import { TabContent } from "app/components/TabContent/TabContent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Hero.scss";
import { SimpleAppBar } from "app/components/SimpleAppBar/SimpleAppBar";
import { setTabRendered } from "app/redux/slices/tabContentSlice";
import { About } from "../About/About";
import { Resume } from "../Resume/Resume";
import { Skills } from "../Skills/Skills";

type RootState = {
  tabContent: {
    isTabRendered: boolean;
  };
};

const Hero = () => {
  const [contentRendered, setContentRendered] = useState("");
  const isTabRendered = useSelector(
    (state: RootState) => state.tabContent.isTabRendered);
  const dispatch = useDispatch();

  const toggleContent = (contentLabel: string) => {
    setContentRendered(contentLabel);
    if(contentRendered !== contentLabel){
      return dispatch(setTabRendered(true));
    }
    dispatch(setTabRendered(!isTabRendered));
  };

  const appBarButtons = [
    { icon: <Person />, onClick: () => toggleContent("aboutme") },
    { icon: <LegendToggle />, onClick: () => toggleContent("resume") },
    { icon: <SettingsEthernet />, onClick: () => toggleContent("skills") },
    // { icon: <Grade />, onClick: () => toggleContent("projects") },
  ];

  return (
    <Box className="hero">
      <Box className="hero-container">
        <Box className="hero-content">
          <Box className="hero-content__header">
            <figure className="hero-content__header-img">
              <img src={profilepicture} alt="Hindra Estrada" />
            </figure>
            <Box className="hero-content__header-text">
              <h1>Hindra Estrada</h1>
              <p>Software Developer Engineer</p>
            </Box>
            <Box className="hero-content__header-sm">
              <a href="https://linkedin.com/in/hindrav">
                <Button>
                  <LinkedIn />
                </Button>
              </a>
              <a href="https://wa.link/qwajkq">
                <Button>
                  <WhatsApp />
                </Button>
              </a>
              <a href="https://instagram.com/hindrav_">
                <Button>
                  <Instagram />
                </Button>
              </a>
              <a href="https://github.com/hindrav">
                <Button>
                  <GitHub />
                </Button>
              </a>
            </Box>
          </Box>
          <Box className="hero-content__appbar">
            <SimpleAppBar buttons={appBarButtons} />
          </Box>
        </Box>
      </Box>
      <Slide
        direction="up"
        in={isTabRendered}
        mountOnEnter
        unmountOnExit
      >
        <Box className="hero-content__footer-item">
          {contentRendered === "aboutme" && <TabContent><About /></TabContent>}
          {contentRendered === "resume" && <TabContent><Resume /></TabContent>}
          {contentRendered === "skills" && <TabContent><Skills /></TabContent>}
          {/* {contentRendered === "projects" && <TabContent>Resume</TabContent>} */}
        </Box>
      </Slide>
    </Box>
  );
};

export { Hero };

import {
  CodeOffOutlined,
  FileDownloadOutlined,
  LeaderboardOutlined,
  MonitorHeartOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "app/interfaces";

import { switchBg, switchColor } from "app/utils/constants";
import { ExperienceStack } from "app/components/ExperienceStack/ExperienceStack";
import { SkillBar } from "app/components/SkillBar/SkillBar";
import { gsExpList, liverExpList } from "app/utils/constants";
import "./Resume.scss";

const Resume = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeBg = switchBg(mode);
  const changeColor = switchColor(mode);
  return (
    <div className={`resume ${changeBg}`} id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <div className="span-title">
            <span>About me</span>
          </div>
          <h2 className={`${changeColor}`}>Fullstack Developer</h2>
          <div className="resume-text-container">
            <div className="resume-text__p">
              <CodeOffOutlined color="info" />
              <p   className={`${changeColor}`}>
                With over 6 years of experience, I have led software development
                projects through all stages, from conception to final delivery.{" "}
                <br />
                <br /> Specializing in web and mobile development, my
                results-oriented approach and expertise in agile methodologies
                ensure successful project delivery efficiently and effectively.
              </p>
            </div>
            <div className="resume-text__p">
              <LeaderboardOutlined color="info" />
              <p   className={`${changeColor}`}>
                I am adaptable and capable of facing new challenges with
                confidence and determination. <br />
                <br /> My ability to learn quickly and adapt to changing
                environments allows me to stay up-to-date with the latest
                technologies and best practices in the industry.
              </p>
            </div>
            <div className="resume-text__p">
              <MonitorHeartOutlined color="info" />
              <p className={`${changeColor}`}>
                I consider myself capable of experiencing and expressing my
                emotions, candid, warm, friendly, confident in my abilities, and
                resilient to stress. Accustomed to demanding challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-skills">
          <div className="span-title">
            <span>Skills</span>
          </div>
          <div className="resume-skills-container">
            <div className="resum-skills-row">
              <SkillBar skill={"ReactJS / Redux / Hooks / HOC"} progress={90} />
              <SkillBar skill={"Javascript / TypeScript"} progress={80} />
              <SkillBar skill={"SCSS / TailwindCSS"} progress={100} />
              <SkillBar skill={"React Native"} progress={60} />
              <SkillBar skill={"Python"} progress={70} />
              <SkillBar skill={"Django / Flask"} progress={50} />
            </div>
            <div className="resum-skills-row">
              <SkillBar skill={"PostgreSQL / MongoDB"} progress={50} />
              <SkillBar skill={"Amazon Web Services"} progress={60} />
              <SkillBar skill={"Docker"} progress={40} />
              <SkillBar
                skill={"Photoshop / Illustrator / Figma / XD"}
                progress={60}
              />
              <SkillBar
                skill={"Jira / Asana / Trello / Notion"}
                progress={100}
              />
              <SkillBar
                skill={"Leadership / Emotional Intelligence"}
                progress={100}
              />
            </div>
          </div>
        </div>
        <div className="resume-xp">
          <div className="span-title">
            <span>Professional Experience</span>
          </div>
          <div className="resume-xp-container">
            <ExperienceStack
              title="Technology Manager"
              date="2022 - Present"
              company="Grupo Salinas"
              companyUrl="https://www.gruposalinas.com/"
              list={gsExpList}
            />
            <ExperienceStack
              title="Fullstack Developer"
              date="2020 - 2022"
              company="El Puerto de Liverpool"
              companyUrl="https://www.elpuertodeliverpool.mx/"
              list={liverExpList}
            />
          </div>
        </div>
        <div className="resume-xp-actions">
          <Button variant="outlined">
            <a style={{ textDecoration: "none" }} href="#">
              <FileDownloadOutlined sx={{ marginRight: "5px", fontSize: 25 }} />
              Donwload CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Resume };

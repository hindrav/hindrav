import { SkillBar } from "app/components/SkillBar/SkillBar";
import "./Skills.scss";
import { Box } from "@mui/material";

const Skills = () => {
  return (
    <Box className="skills">
      <Box className="skills-container">
        <h2>My skills</h2>
        <Box className="skills-box">
          <Box className="skills-row">
            <SkillBar skill={"ReactJS"} progress={90} />
            <SkillBar skill={"React Native"} progress={70} />
            <SkillBar skill={"Redux / Redux Toolkit / Context "} progress={100} />
            <SkillBar skill={"Javascript / TypeScript"} progress={80} />
            <SkillBar skill={"SCSS / TailwindCSS"} progress={100} />
            <SkillBar skill={"Python"} progress={70} />
            <SkillBar skill={"Flask"} progress={70} />
            <SkillBar skill={"Project Management"} progress={100} />
          </Box>
          <Box className="skills-row">
            <SkillBar skill={"PostgreSQL / MongoDB"} progress={50} />
            <SkillBar skill={"Amazon Web Services"} progress={60} />
            <SkillBar skill={"Google Cloud Platform"} progress={50} />
            <SkillBar skill={"Docker"} progress={40} />
            <SkillBar
              skill={"Photoshop / Illustrator / Figma / XD"}
              progress={60}
            />
            <SkillBar skill={"Jira / Asana / Trello / Notion"} progress={100} />
            <SkillBar skill={"Django"} progress={50} />
            <SkillBar
              skill={"Leadership / Emotional Intelligence"}
              progress={100}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Skills };

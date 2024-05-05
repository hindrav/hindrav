import { Box } from '@mui/material';
import { AccountTree, Code, Hiking, Mail, Room, VolunteerActivism } from '@mui/icons-material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import "./About.scss";

type Props = {}

const About = (props: Props) => {
  return (
    <Box className="about">
      <Box className="about-container">
        <h2>A little bit about me</h2>
        <Box className="about-item">
          <p><Mail/> business@hindrav.com </p>
          <p><Room /> Mexico City, Mexico.</p>
        </Box>
        <Box className="about-box">
          <Box className="about-item__desc">
            <p><Code/> I am a software developer engineer with 6 years of experience, both in development and project leadership.</p>
            <p><AccountTree/> I've led full-stack development projects, both web and mobile, from conception to final delivery.</p>
            <p><GppGoodIcon />I hold a Professionalization of Projects certification from <a href="https://tec.mx/es">Tecnológico de Monterrey</a>.</p>
          </Box>
          <Box className="about-item__desc">
            <p><Hiking/> I am adaptable and capable of facing new challenges with confidence and determination.</p>
            <p><VolunteerActivism />I consider myself capable of experiencing and expressing my emotions, candid, warm, friendly, confident in my abilities, and resilient to stress. Accustomed to demanding challenges.</p>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { About };
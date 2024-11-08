import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
} from "react-icons/ri";
import {
  FaReact,
  FaSass,
  FaFigma,
  FaAws,
  FaGitAlt,
  FaGithubAlt,
} from "react-icons/fa";
import { SiMui, SiShadcnui, SiJira } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlineMailOutline,  } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


import logoMaz from "../assets/images/logo-maz.png";
import logoFbh from "../assets/images/logo-fbh.png";
import logoGm from "../assets/images/logo-gm.png";

export const techStackItems = [
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: FaReact, name: "React" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: TbBrandTypescript, name: "TypeScript" },
  { icon: AiOutlinePython, name: "Python" },
  { icon: GrGraphQl, name: "GraphQL" },
  { icon: FaAws, name: "Amazon Web Services" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithubAlt, name: "GitHub" },
  { icon: SiMui, name: "Material UI" },
  { icon: SiShadcnui, name: "Shadcn UI" },
  { icon: RiFirebaseFill, name: "Firebase" },
  { icon: DiPhotoshop, name: "Photoshop" },
  { icon: DiIllustrator, name: "Illustrator" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { icon: FaSass, name: "Sass" },
  { icon: FaFigma, name: "Figma" },
  { icon: SiJira, name: "Jira" },
];

export const projectItems = [
  {
    title: "Commercial Portfolio",
    desc: "A React-based platform developed for Fixing Broken Houses, a construction and remodeling company based in Texas.",
    img: logoFbh,
    altImg: "Fixing Broken Houses",
    url: "https://fixingbrokenhouses.com/",
  },
  {
    title: "Commercial Portfolio",
    desc: "A React-based platform developed for Grupo Gran Alianza Mexicana, a political alliance in Mexico.",
    img: logoGm,
    altImg: "Grupo Gran Alianza Mexicana",
    url: "https://ggam-76598.web.app/",
  },
  {
    title: "QR Smart Ticketing System for Events",
    desc: "Platform developed for the Municipality of Mazarrón (Spain) using Django and Next.js, designed to manage QR code-based ticketing for its cultural events.",
    img: logoMaz,
    altImg: "Town Hall Mazarron",
    url: "https://lavozdemazarron.com/index.php/noticias/4730-codigos-qr-para-las-entradas-de-mares-de-papel",
  }
];

export const contactItems = [
  {
    icon: MdOutlineMailOutline,
    title: "Email me",
    text: "hindrave@gmail.com",
    url: "mailto:hindrave@gmail.com?subject=Let's work together&body=Hi, Hindra"
  },
  {
    icon: FaWhatsapp,
    title: "Message me",
    text: "+52 55 6941 8799",
    url: "https://wa.link/qwajkq"
  }
]
import React from 'react'
import { TbBrandReact } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { Button } from '@mui/material';
import { useSelector } from "react-redux";

import { RootState } from "app/interfaces";
import { switchBg, switchColor } from "app/utils/constants";

import "./Footer.scss";

const Footer = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);
  const changeBg = switchBg(mode);
  return (
    <div className={`footer ${changeBg}`}>
        <div className="footer-header">
            <p>This site was built with</p>
            <div className="footer-header-icons">
                <span><TbBrandReact /></span>
                <span><TbBrandRedux /></span>
                <span><SiReactrouter/></span>
            </div>
        </div>
        <div className="footer-body">
            <FaGithubAlt />
            <Button variant='contained' color='info'><a href="https://github.com/hindrav/hindrav">Repository</a></Button>
        </div>
    </div>
  )
}

export { Footer }
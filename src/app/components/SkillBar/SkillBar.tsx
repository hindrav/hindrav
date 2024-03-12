import React from 'react'
import { SkillBarProps } from 'app/interfaces';
import { Slide } from '@mui/material';
import { useSelector } from "react-redux";

import { RootState } from "app/interfaces";
import { switchBg, switchColor } from "app/utils/constants";
import './SkillBar.scss';

const SkillBar: React.FC<SkillBarProps> = ({ skill, progress }) => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);
  return (
    <div className="sb">
        <div className="sb-header">
            <span className={`${changeColor}`}>{skill}</span>
            <span className={`${changeColor}`}>{progress} %</span>
        </div>
        <div className="sb-bar">
            <Slide  direction="right" in={true} mountOnEnter unmountOnExit appear>
                <div className="sb-bar-progress" style={{width:`${progress}%`}}></div>
            </Slide>
        </div>
    </div>
  )
}

export { SkillBar };
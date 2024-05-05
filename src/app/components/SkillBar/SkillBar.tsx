import { Slide } from '@mui/material';
import './SkillBar.scss';

type Props = {
    skill: string,
    progress: number,
}

const SkillBar = (props: Props) => {
   const { skill, progress } = props;
    return (
    <div className="sb">
        <div className="sb-header">
            <span>{skill}</span>
            <span>{progress} %</span>
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
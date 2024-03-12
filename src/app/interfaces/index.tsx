export interface SkillBarProps {
  skill: string,
  progress: number,
}

export interface ExperienceStackProps{
  title: string,
  date: string,
  company: string,
  companyUrl: string,
  list: string[],
}

export interface ClientCardProps{
  url: string,
}

export interface ProjectItemProps{
  title: string,
  description: string,
  projectUrl: string,
  imageUrl: string,
}

export interface InterestsProps{
  icon: JSX.Element,
  text: string,
}

export interface ModeState{
  mode: boolean,
}

export interface RootState {
  colorMode: ModeState;
}

export interface BasicModalProps {
  open: boolean,
  onClose: () => void,
  title: string,
  text: string,
  urlOne: string,
  urlTwo: string,
}
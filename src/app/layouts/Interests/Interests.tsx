import SmartToyIcon from "@mui/icons-material/SmartToy";
import ScienceIcon from "@mui/icons-material/Science";
import AppleIcon from "@mui/icons-material/Apple";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useSelector } from "react-redux";

import { InterestCard } from "app/components/InterestCard/InterestCard";
import { RootState } from "app/interfaces";
import { switchBg } from "app/utils/constants";

import "./Interests.scss";


const Interests = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeBg = switchBg(mode);
  return (
    <div className={`interests ${changeBg}`}>
        <div className="span-title">
          <span>Interests</span>
        </div>
      <div className="interests-container">
        <InterestCard
          icon={<SmartToyIcon color="info" />}
          text="Artificial Intelligence"
        />
        <InterestCard
          icon={<ScienceIcon color="success" />}
          text="Data Science"
        />
        <InterestCard
          icon={<AppleIcon color="info" />}
          text="Mobile Development"
        />
        <InterestCard
          icon={<FavoriteIcon color="error" />}
          text="Soft Skills"
        />
        <InterestCard
          icon={<VerifiedUserIcon color="info" />}
          text="Cibersecurity"
        />
        <InterestCard
          icon={<FitnessCenterIcon color="warning" />}
          text="Bodybuilding"
        />
      </div>
    </div>
  );
};

export { Interests };

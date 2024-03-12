import { useSelector } from "react-redux";
import { ClientCard } from "app/components/ClientCard/ClientCard";
import { RootState } from "app/interfaces";
import { switchBg, switchColor } from "app/utils/constants";

import baz from "app/assets/images/baz.png";
import ekt from "app/assets/images/ekt.png";
import liverpool from "app/assets/images/liverpool.png";
import fbhlogo from "app/assets/images/fbhlogo.png";
import nestle from "app/assets/images/nestle.png";
import mazarron from "app/assets/images/mazarron.png";
import "./Clients.scss";



const Clients = () => {
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeBg = switchBg(mode);
  return (
    <div className={`clients ${changeBg}`}>
      <div className="span-title">
        <span>Thanks for your preference</span>
      </div>
      <div className="clients-container">
        <ClientCard url={mazarron} />
        <ClientCard url={fbhlogo} />
        <ClientCard url={liverpool} />
        <ClientCard url={ekt} />
        <ClientCard url={baz} />
        <ClientCard url={nestle} />
      </div>
    </div>
  );
};

export { Clients };

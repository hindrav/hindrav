import React from "react";

import { Hero } from "app/layouts/Hero/Hero";
import { Resume } from "app/layouts/Resume/Resume";
import { Clients } from "app/layouts/Clients/Clients";
import { Portfolio } from "app/layouts/Portfolio/Portfolio";
// import { Interests } from "app/layouts/Interests/Interests";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Resume />
      <Portfolio />
      {/* <Interests /> */}
      <Clients />
    </>
  );
};

export { Home };

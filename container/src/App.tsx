import React from "react";
import { ContainerApp } from "./components/ContainerApp";

const SkillReviewApp = React.lazy(() => import("mf_skillreview/SkillReviewApp"));
const Navbar = React.lazy(() => import("mf_header/Navbar"));

const App = () => (
  
          <ContainerApp
          SkillReviewApp={SkillReviewApp}
          Navbar = {Navbar}
          />
);

export default App;

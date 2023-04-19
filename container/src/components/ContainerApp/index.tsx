
import React from "react";

type ContainerAppProps = {
  SkillReviewApp: React.LazyExoticComponent<React.ComponentType<{}>>,
  Navbar : React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  SkillReviewApp,
  Navbar
}: ContainerAppProps) => {
  return (
    <>
    <Navbar/>
    <SkillReviewApp/>
    </>
  );
};

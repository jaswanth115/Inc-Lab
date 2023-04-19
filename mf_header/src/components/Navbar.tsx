import React from "react";
import {
  BurgerButton,
  MainMenu,
  MainMenuButton,
  FlexCell,
  Burger,
} from "@epam/promo";
import {
  AdaptiveItemProps,
} from "@epam/uui-components";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';



const Navbar = ()=> {
  const renderBurger = () => (
    <>
      <BurgerButton caption="DEP Onboarding" />
      <BurgerButton caption="Skill Review" />
      <BurgerButton caption="Learning Plan" />
      <BurgerButton caption="Project Proposals" />
      <BurgerButton caption="Log out" />
    </>
  );

  const getMenuItems = (): AdaptiveItemProps[] => {
    return [
      {
        id: "burger",
        priority: 100,
        render: (hiddenItems) => (
          <Burger
            key={"burger"}
            width={300}
            renderBurgerContent={renderBurger}
          />
        ),
      },
      {
        id: "Skill Review",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="DEP Onboarding" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Requests" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Learning Plan" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Project Proposals" />,
      },
      {
        id: "requests",
        priority: 3,
        render: () => <MainMenuButton href="/" caption="Interviews" />,
      },
    ];
  };

  return (
    <>
    <div className="page-header">
      <FlexCell grow={1}>
        <MainMenu items={getMenuItems()} />
      </FlexCell>
    </div>
</>
    
  );
}

export default Navbar;
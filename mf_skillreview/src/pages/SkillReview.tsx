import Banner from "./components/Banner";
import data from "./components/mentees_data.json";
import Battery from "./components/Battery";
//////////////////////
import React from "react";
import {
  FlexCell,
  Avatar,
  FlexRow,
  Accordion,
} from "@epam/promo";
import "./SkillReview.scss";

import react_basic from "../data/react-basic.json"
import javascript_basic from "../data/javascript-basic.json"
import html_basic from "../data/html-basic.json"

import { Link } from 'react-router-dom';

import DoughnutChart from "../components/DoughnutChart";

const containerStyle = {
  display: "flex",
  borderRadius: "6px",
  overflow: "hidden",
};

export default function SkillReviewContent() {
  const [value, onValueChange] = React.useState("");
  const handleChange = () => {};

  

  return (
    <>
      <div className="page-body-container">
        <div className="container" style={containerStyle}>
          <div className="user-info-block">
            <div className="user-avatar">
              <FlexRow spacing="6">
                <Avatar
                  alt="avatar"
                  img="https://static.cdn.epam.com/avatar/68f310872afde56093443db6c2de4552.jpg"
                  size="90"
                />
              </FlexRow>
            </div>
            <div className="user-info">
              <div
                style={{
                  fontFamily: "Sans Semibold,Arial,sans-serif",
                  fontWeight: "400",
                }}
              >
                Pranita Panigrahi
              </div>
              <div style={{ color: "#009ecc", fontSize: "16px" }}>
                Lead Software Engineer
              </div>
              <div
                style={{
                  color: "#6c6f80",
                  fontFamily: "Sans Regular,Arial,sans-serif",
                  fontSize: "12px",
                }}
              >
                Primary Skill : Frontend Development
              </div>
            </div>
            {/* <img className="_3ptQf" width="72" height="72" src="https://static.cdn.epam.com/avatar/68f310872afde56093443db6c2de4552.jpg"/> */}
          </div>
          <div>
          
          {
            data.map((item)=> {
              return (
                      <>
                        <Banner Photo={item.photo} Name={item.name} Designation={item.designation}></Banner>
                      </>
                      )
                  })
          }
          </div>
          <div><DoughnutChart completedSkills={15} totalSkills={31}/></div>
        </div>
        <div className="page-search">
          {/*       
            <SearchInput value={ value } onValueChange={handleChange} placeholder='Type for search' debounceDelay={ 1000 } /> */}

          <FlexCell width="auto">
            <input
              type="search"
              className="search"
              placeholder="Search"
              value=""
            ></input>
          </FlexCell>
        </div>

        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title="HTML" mode="block">
            
            <div>
                {
                  html_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                          <Battery title={item.title}></Battery>
                            <Link to={`skill/html/${item.id}`} target="_blank">{item.title}</Link>
                          </div>
                           { index !== html_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                }
              </div>
            </Accordion>
          </FlexCell>
        </div>
        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title=" JavaScript" mode="block">
            <div>
                {
                  javascript_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                          <Battery title={item.title}></Battery>
                          <Link to={`skill/javscript/${item.id}`} target="_blank">{item.title}</Link>
                          </div>
                           { index !== javascript_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                } 
              </div>
            </Accordion>
          </FlexCell>
        </div>
        <div className="accordion">
          <FlexCell width="100%">
            <Accordion title="React(Basic)" mode="block">
              <div>
                {
                  react_basic.map((item ,index)=> {
                    return (
                        <>
                          <div key={item.id} className="accordion-item">
                          <Battery title={item.title}></Battery>
                          <Link to={`skill/react/${item.id}`} target="_blank">{item.title}</Link>
                          </div>
                           { index !== react_basic.length-1 ?
                              <div className="accordion-item-border"></div> : null
                           }
                        </>
                        )
                  })
                }
              </div>
            </Accordion>
          </FlexCell>
        </div>
      </div>
    </>
  );
}

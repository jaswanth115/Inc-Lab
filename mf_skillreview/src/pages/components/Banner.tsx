import {Avatar,} from "@epam/promo";
import "./Banner.scss"
//
import React, { FC } from "react";

type props = {
    Photo: string;
    Name: string;
    Designation: string;
  };

const Banner: FC<props> = ({ Photo, Name, Designation}) => {
    
    
    return (
                <div className="banner">
                    <div>
                        <Avatar
                        alt="avatar"
                        img={Photo}
                        size="48"
                        />
                    </div>
                    <div style={{
                        color: "#6c6f80",
                        fontFamily: "Sans Regular,Arial,sans-serif",
                        fontSize: "12px",
                        paddingLeft: "20px",
                        }}>
                        <p>{Name} <br></br>{Designation}</p> 
                    </div>
                </div>
            );
  };

export default Banner;
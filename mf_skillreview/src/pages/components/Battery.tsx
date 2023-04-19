import React, { FC } from 'react';
import "./battery.scss"


interface TitleProps {
  title: any;
}

// const Title: FC<TitleProps> = ({ title, subtitle }) => {

const Battery: FC<TitleProps> = ({title}) => {
  
    
    const handlebar_1 = ()=>{
        // let bar = document.getElementById("bar1") as HTMLInputElement;   event : React.MouseEvent<HTMLElement, MouseEvent>
        // bar.setAttribute("style", "background-color:green;");
        // console.log(event.target);
        // console.log(event.currentTarget);
        let bar1 : HTMLElement = document.getElementById("bar1") as HTMLInputElement;
        let bar2 : HTMLElement = document.getElementById("bar2") as HTMLInputElement;
        let bar3 : HTMLElement = document.getElementById("bar3") as HTMLInputElement;
        let bar4 : HTMLElement = document.getElementById("bar4") as HTMLInputElement;
        bar1.setAttribute("style", "background-color:#47fc05;");
        bar2.setAttribute("style", "background-color:#fdfffc;");
        bar3.setAttribute("style", "background-color:#fdfffc;");
        bar4.setAttribute("style", "background-color:#fdfffc;");
        console.log(title);
        
    }
    const handlebar_2 = ()=>{
      let bar1 : HTMLElement = document.getElementById("bar1") as HTMLInputElement;
      let bar2 : HTMLElement = document.getElementById("bar2") as HTMLInputElement;
      let bar3 : HTMLElement = document.getElementById("bar3") as HTMLInputElement;
      let bar4 : HTMLElement = document.getElementById("bar4") as HTMLInputElement;
      bar1.setAttribute("style", "background-color:#47fc05;");
      bar2.setAttribute("style", "background-color:#47fc05;");
      bar3.setAttribute("style", "background-color:#fdfffc;");
      bar4.setAttribute("style", "background-color:#fdfffc;");
      console.log(title);
    }
    const handlebar_3 = ()=>{
      let bar1 : HTMLElement = document.getElementById("bar1") as HTMLInputElement;
      let bar2 : HTMLElement = document.getElementById("bar2") as HTMLInputElement;
      let bar3 : HTMLElement = document.getElementById("bar3") as HTMLInputElement;
      let bar4 : HTMLElement = document.getElementById("bar4") as HTMLInputElement;
      bar1.setAttribute("style", "background-color:#47fc05;");
      bar2.setAttribute("style", "background-color:#47fc05;");
      bar3.setAttribute("style", "background-color:#47fc05;");
      bar4.setAttribute("style", "background-color:#fdfffc;");
      console.log(title);
    }
    const handlebar_4 = ()=>{
      let bar1 : HTMLElement = document.getElementById("bar1") as HTMLInputElement;
      let bar2 : HTMLElement = document.getElementById("bar2") as HTMLInputElement;
      let bar3 : HTMLElement = document.getElementById("bar3") as HTMLInputElement;
      let bar4 : HTMLElement = document.getElementById("bar4") as HTMLInputElement;
      bar1.setAttribute("style", "background-color:#47fc05;");
      bar2.setAttribute("style", "background-color:#47fc05;");
      bar3.setAttribute("style", "background-color:#47fc05;");
      bar4.setAttribute("style", "background-color:#47fc05;");
      console.log(title);
    }
    // var bar1_id={title}+"bar1";
    // var bar2_id={title}+"bar2";
    // var bar3_id={title}+"bar3";
    // var bar4_id={title}+"bar4";
    return (
      <> 
      <div id={title} className="maindiv"> 
        
        <div id="bar1" className="bar1" onClick={handlebar_1}></div>
        <div id="bar2" className="bar2" onClick={handlebar_2}></div>
        <div id="bar3" className="bar3" onClick={handlebar_3}><div className="circle"></div></div>
        <div id="bar4" className="bar4" onClick={handlebar_4}></div>
      </div>
      </>
    );
  };

  export default Battery;
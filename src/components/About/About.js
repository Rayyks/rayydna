import React from "react";
import { Link } from "react-router-dom";
import Me from "../../assets/img/me.jpg";
import "./style.css";
import HtmlLogo from "../../assets/icons/html.svg";
import CssLogo from "../../assets/icons/css.svg";
import JSLogo from "../../assets/icons/js.svg";
import RJSlogo from "../../assets/icons/react.svg";
import VSlogo from "../../assets/icons/vs.svg";
import Gitlogo from "../../assets/icons/git.svg";
import Sasslogo from "../../assets/icons/sass.svg";
import Taillogo from "../../assets/icons/tailwindcss.svg";
import Figma from "../../assets/icons/figma.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div className="flex flex2">
      <div className="container3">
        <div className="menu-top">
          <div className="home-button">
            <Link to={"/"}>
              <span>&larr;</span>HOME
            </Link>
          </div>
          <div className="project-button">
            <Link to={"/projects"}>
              PROJECT <span>&rarr;</span>
            </Link>
          </div>
        </div>
        {/* ABOUT ME  */}
        <div className="about-me">
          <h1 className="title">ABOUT ME</h1>
          {/* PICT */}
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="pict grid grid-rows-3 grid-flow-col gap-4">
              <p className="me row-span-3">
                Im, Rayyand Kananda Syahputra a a Frontend Developer, i like
                making cool websites projects which train me to improve my
                coding and logic, and every day im always mastering my skill to
                be a good Frontend Developer
              </p>
              <img
                className="img row-span-3 rounded-xl shadow-2xl"
                src={Me}
                alt="Picture of me ;3"
              />
            </div>
          </AnimationOnScroll>
          {/* PICT */}
        </div>
        {/* ABOUT ME  */}

        {/* SKILS */}
        <div className="skills">
          <h2 className="used">Languages and tools i use:</h2>
        </div>
        <div className="logo pb-96">
          <img className="w-20 " src={HtmlLogo} alt="logo HTML" />
          <img className="w-20 " src={CssLogo} alt="logo CSS" />
          <img className="w-20 " src={JSLogo} alt="logo Javasript" />
          <img className="w-20 " src={RJSlogo} alt="logo React JS" />
          <img className="w-20 " src={VSlogo} alt="logo Visual Studio" />
          <img className="w-20 " src={Sasslogo} alt="logo SASS" />
          <img className="w-20 " src={Taillogo} alt="logo Tailwincdcss" />
          <img className="w-20 " src={Figma} alt="logo Tailwincdcss" />
          <img className="w-20 " src={Gitlogo} alt="logo Git" />
        </div>
        {/* SKILS */}
      </div>
    </div>
  );
};

export default About;

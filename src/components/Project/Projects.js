import React from "react";
import data from "../../data.js";
import Project from "./Project.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const Projects = () => {
  return (
    <motion.div
      className="flex3 container-fluid bg-light p-5 min-vh-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
    >
      {/* HEADER */}
      <div className="menu-top">
        <div className="home-button2 font-normal">
          <Link to={"/"}>
            <span>&larr;</span>HOME
          </Link>
        </div>
      </div>
      <div className="icons2">
        {/* INSTAGRAM ICON */}

        <div className="instagram">
          <a href="https://www.instagram.com/rayy__dna/" target={"_blank"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.1408 14.0796C33.1008 14.1728 33.1016 18.5464 36.1408 18.6388C39.1808 18.5456 39.18 14.172 36.1408 14.0796ZM26 16.7188C20.612 16.7188 16.2444 21.098 16.2444 26.5C16.7584 39.4748 35.2432 39.4712 35.7552 26.5C35.7556 21.098 31.3876 16.7188 26 16.7188ZM26 32.8492C22.5028 32.8492 19.6676 30.0064 19.6676 26.5C20.0012 18.078 32.0004 18.08 32.3328 26.5C32.3324 30.0068 29.4972 32.8492 26 32.8492Z"
                fill="white"
              />
              <path
                d="M44.8832 18.6673C44.7424 12.0005 40.5008 7.75645 33.8324 7.61685C32.2312 7.46245 19.7696 7.45965 18.1672 7.61685C11.5004 7.75765 7.25642 11.9993 7.11682 18.6677C6.96242 20.2665 6.95922 32.7321 7.11682 34.3329C7.24122 40.9781 11.5212 45.2593 18.1672 45.3833C19.7684 45.5393 32.23 45.5393 33.8324 45.3833C35.8544 45.2909 37.2356 44.9697 38.444 44.5001C42.6788 42.8085 44.748 39.0457 44.8832 34.3325C45.0376 32.7313 45.0404 20.2697 44.8832 18.6673ZM33.6764 41.9637C32.1008 42.1141 19.9 42.1165 18.3232 41.9637C16.4712 41.8793 15.4652 41.5697 14.7956 41.3097C9.01602 38.6289 10.808 33.2077 10.5356 25.7665C10.5416 24.0381 10.532 20.5521 10.536 18.8237C10.7668 13.6709 13.1936 11.2853 18.3232 11.0365C19.9008 10.8861 32.0984 10.8837 33.6764 11.0365C38.8308 11.2673 41.214 13.6941 41.4636 18.8233C41.5656 20.0549 41.6396 26.7781 41.4636 30.1805C41.6536 36.5709 41.3624 41.5889 33.6764 41.9637Z"
                fill="white"
              />
              <rect
                x="0.5"
                y="1"
                width="51"
                height="51"
                rx="9.5"
                stroke="white"
              />
            </svg>
          </a>
        </div>
        {/* END INSTAGRAM CON */}

        {/* FACEBOOK ICON */}
        <div className="facebook">
          <a href="https://www.facebook.com" target={"_blank"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1552)">
                <path
                  d="M46.3333 26.5C46.3333 15.4543 37.379 6.5 26.3333 6.5C15.2876 6.5 6.33331 15.4543 6.33331 26.5C6.33331 36.4826 13.647 44.7566 23.2083 46.2569V32.2812H18.1302V26.5H23.2083V22.0938C23.2083 17.0812 26.1942 14.3125 30.7626 14.3125C32.9508 14.3125 35.2396 14.7031 35.2396 14.7031V19.625H32.7176C30.2331 19.625 29.4583 21.1667 29.4583 22.7483V26.5H35.0052L34.1185 32.2812H29.4583V46.2569C39.0196 44.7566 46.3333 36.4826 46.3333 26.5Z"
                  fill="white"
                />
                <path
                  d="M34.1185 32.2812L35.0052 26.5H29.4583V22.7483C29.4583 21.1667 30.2331 19.625 32.7176 19.625H35.2396V14.7031C35.2396 14.7031 32.9508 14.3125 30.7626 14.3125C26.1942 14.3125 23.2083 17.0812 23.2083 22.0938V26.5H18.1302V32.2812H23.2083V46.2569C25.279 46.581 27.3876 46.581 29.4583 46.2569V32.2812H34.1185Z"
                  fill="black"
                />
              </g>
              <rect
                x="0.833313"
                y="1"
                width="51"
                height="51"
                rx="9.5"
                stroke="white"
              />
              <defs>
                <clipPath id="clip0_1_1552">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(6.33331 6.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        {/* ICON FACEBOOK */}

        {/* ICON LINKEDIN */}
        <div className="linkedin">
          <a href="https://linkedin.com/in/rayyand" target={"_blank"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1556)">
                <path
                  d="M42.4522 42.2863H36.2291V32.5405C36.2291 30.2165 36.1876 27.2248 32.9924 27.2248C29.7513 27.2248 29.2554 29.7569 29.2554 32.3713V42.2856H23.0323V22.2443H29.0064V24.9831H29.0901C30.3082 22.9003 32.5732 21.6563 34.9845 21.7458C41.2918 21.7458 42.4548 25.8946 42.4548 31.2919L42.4522 42.2863ZM16.0106 19.5048C14.0161 19.5051 12.3989 17.8885 12.3986 15.894C12.3982 13.8995 14.0148 12.2823 16.0093 12.2819C18.0037 12.2816 19.6209 13.8982 19.6212 15.8927C19.6214 16.8505 19.2411 17.7692 18.564 18.4465C17.8868 19.1239 16.9683 19.5046 16.0106 19.5048ZM19.1221 42.2863H12.8925V22.2443H19.1221V42.2863ZM45.5547 6.50277H9.76543C8.07395 6.48368 6.68684 7.83861 6.6662 9.5301V45.4686C6.68614 47.1609 8.07313 48.5171 9.76543 48.4994H45.5547C47.2503 48.5204 48.6427 47.1642 48.6662 45.4686V9.52751C48.642 7.83268 47.2495 6.47782 45.5547 6.4999"
                  fill="#FFF5F5"
                />
              </g>
              <rect
                x="1.16663"
                y="1"
                width="53"
                height="53"
                rx="9.5"
                stroke="white"
              />
              <defs>
                <clipPath id="clip0_1_1556">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(6.66663 6.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        {/* END LINKEDIN ICON */}

        {/* TWITTER ICON */}
        <div className="twitter">
          <a href="https://twitter.com/" target={"_blank"}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5684 14.9488C43.2016 15.556 41.7332 15.9644 40.192 16.1488C41.766 15.206 42.9728 13.7136 43.5412 11.934C42.07 12.8068 40.4392 13.4408 38.702 13.7836C37.3124 12.3024 35.3328 11.3768 33.1416 11.3768C28.2984 11.312 24.5748 16.0436 25.7208 20.7308C19.3892 20.4136 13.776 17.38 10.0168 12.7692C7.96521 16.1148 9.13001 20.8992 12.3752 22.9416C11.1268 22.9016 9.95121 22.5588 8.92441 21.9888C8.87681 25.7108 11.5172 28.8532 15.036 29.5544C13.9548 29.856 12.7092 29.9032 11.5952 29.6856C12.5652 32.712 15.3788 34.916 18.7124 34.9772C15.6984 37.3856 11.4788 38.6412 7.43201 38.1324C23.7048 48.1472 41.694 35.0264 40.7652 18.892C42.2544 17.8168 43.5472 16.4756 44.5684 14.9488Z"
                fill="white"
              />
              <rect
                x="0.5"
                y="1"
                width="51"
                height="51"
                rx="9.5"
                stroke="white"
              />
            </svg>
          </a>
        </div>
        {/* END TWITTER ICON */}
      </div>
      <header>
        <h1 className="myProject">PROJECT</h1>
      </header>
      {/* HEADER */}
      <div className="row-start-auto">
        {data.ProjectsData.map((project) => {
          return (
            <div className="flex" key={project.id}>
              <Project
                id={project.id}
                image={project.img}
                name={project.name}
                stack={project.stack}
                live={project.live}
                source={project.source}
                desc={project.description}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;

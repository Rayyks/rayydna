import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import "./style.css";

function Project({ id, image, name, stack, live, source, desc }) {
  return (
    <div className="">
      {/* My Project */}
      <div className="card mb-5" style={{ maxWidth: "900px" }}>
        <div className="backdrop-blur-xl bg-white bg-opacity-10 rounded-xl card-content">
          {/* CONTENT */}
          <div className="pt-4 pb-4 pl-4">
            <img
              src={image}
              className="project-img imageg rounded-md"
              alt={name}
            />
          </div>

          {/* TEXT */}
          <div className="">
            <div className="card-body pl-5">
              <h5 className="card-title font-bold text-2xl">{name}</h5>
              <p className="card-text">{desc}</p>
              <div className="mt-5 align-text-bottom">
                <p className="card-text">{stack}</p>
                <p className="card-text d-flex gap-4 link-project">
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-content rounded-md p-2"
                  >
                    Live Site{" "}
                    <BiLinkExternal style={{ color: "hsl(205, 72%, 37%)" }} />
                  </a>
                  <a
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    className="link-content rounded-md p-2"
                  >
                    Source Code{" "}
                    <AiOutlineGithub style={{ color: "hsl(205, 72%, 37%)" }} />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* TEXT */}
        </div>
      </div>

      {/* END MY PROJECT */}
    </div>
  );
}

export default Project;

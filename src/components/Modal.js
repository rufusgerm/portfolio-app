import React, { useState } from "react";
import "./Modal.css";

const createTechLinks = (techName, idx) => {
  return (
    <li key={techName + idx} className="tech-item ">
      <img
        src={require(`../tech_icons/${techName.toLowerCase()}.svg`)}
        alt={techName}
        title={techName}
      ></img>
    </li>
  );
};

const funnyFunction = (urlStr) => {
  if (urlStr.startsWith("http")) {
    window.open(urlStr, "_blank");
    return null;
  }
  let dotIdx = urlStr.indexOf("...");
  const promptStr = urlStr.slice(0, dotIdx);
  const oldUrl = urlStr.slice(dotIdx + 3);
  alert(promptStr);
  window.open(oldUrl, "_blank");
};

const Modal = (props) => {
  const [fadeBg, setFadeBg] = useState(true);
  const [slideBox, setSlideBox] = useState(true);
  const path = require(`../app_images/${props.path}`);

  const handleClick = () => {
    setFadeBg(false);
    setSlideBox(false);
    setTimeout(() => {
      props.onClose();
    }, 1000);
  };

  return (
    <div className="modal-wrapper">
      <div className={`modal-backdrop ${fadeBg ? "fade-in" : "fade-out"}`} />
      <div className={`modal-box ${slideBox ? "slide-in" : "slide-out"}`}>
        <button className="modal-close" onClick={handleClick}>
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>
        <div className="modal-img">
          <img className="project-img" src={path} alt={props.title} />
          <ul className="modal-tech">
            {props.tech.map((item, idx) => {
              return createTechLinks(item, idx);
            })}
          </ul>
          <button
            onClick={() => funnyFunction(props.url)}
            className="modal-btn"
          >
            Tutorial
          </button>
        </div>
        <div className="modal-details-wrapper ">
          <div className="modal-body ">
            <h1 className="modal-body-title ">{props.title}</h1>
            <hr />
            <p className="modal-body-desc modal-text">&emsp;{props.desc}</p>
            <h3 className="modal-body-dev ">Development</h3>
            <hr />
            <p className="modal-body-dev-desc modal-text">&emsp;{props.dev}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

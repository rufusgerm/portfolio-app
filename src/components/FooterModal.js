import React, { useState } from "react";
import "./Modal.css";

const ATTR_LIST = [
  {
    type: `icon`,
    titles: [`Pycharm,`, `NetBeans,`, `IntelliJ IDEA,`, `C++,`, `VS Code`],
    by: `Icons8`,
    href: `https://icons8.com/`,
  },
  {
    type: `icon`,
    titles: [`Oracle SQL`],
    by: `Icon Fonts`,
    href: `http://www.onlinewebfonts.com/icon`,
  },
  {
    type: `image`,
    titles: [`Portrait`],
    by: `Foxwarpaint`,
    href: `https://www.fiverr.com/foxwarpaint`,
  },
  {
    type: "icon",
    titles: [`All`, `other`],
    by: `Font Awesome`,
    href: `https://fontawesome.com/license`,
  },
];

const CreateAttributionList = (attrObj, idx) => {
  let listItemStr = ``;
  // appends every title to the string
  attrObj.titles.forEach((title) => {
    listItemStr += ` ${title}`;
  });
  // potentially pluralizes and adds appropriate verb to string
  listItemStr += ` ${attrObj.type}${
    attrObj.titles.length > 1 ? `s were` : ` was`
  }`;

  return (
    <li className="attribution-item" key={attrObj.type + idx}>
      &emsp;{`${listItemStr} provided by `}
      <a href={`${attrObj.href}`} target="_blank" rel="noopener noreferrer">
        {attrObj.by}
      </a>
    </li>
  );
};

const FooterModal = (props) => {
  const [fadeBg, setFadeBg] = useState(true);
  const [slideBox, setSlideBox] = useState(true);

  const handleClick = () => {
    setFadeBg(false);
    setSlideBox(false);
    setTimeout(() => {
      props.onClose();
    }, 1000);
  };

  return (
    <div className="modal-wrapper">
      <div
        className={`modal-backdrop ${fadeBg ? "fade-in" : "fade-out"}`}
        onClick={handleClick}
      />
      <div
        className={`footer-modal modal-box ${
          slideBox ? "slide-in" : "slide-out"
        }`}
      >
        <button className="modal-close" onClick={handleClick}>
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>
        <div className="modal-list-wrapper">
          <h1 className="attribution-header">Attributions</h1>
          <hr className="attribution-rule" />
          <ul className="attribution-list">
            {ATTR_LIST.map((item, idx) => {
              return CreateAttributionList(item, idx);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterModal;

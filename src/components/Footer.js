import React, { useState } from "react";
import ReactDOM from "react-dom";
import ExtLink from "./ExtLink";
import "./Footer.css";
import FooterModal from "./FooterModal";

const createFooterLinks = (extLink, idx) => {
  let className = "footer-link";
  let name = extLink.title;
  let href = extLink.href;
  let iconName = extLink.icon;

  return (
    <li key={idx} className={className} name={name}>
      <ExtLink hRef={href} iconName={iconName + " fa-2x"} />
    </li>
  );
};

const Footer = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showAttrModal = () => {
    const modalDiv = document.getElementById("modal-root");
    //If a modal (from a project) is open, simulates a click to close that modal
    if (modalDiv.firstChild) {
      // Get modal backdrop element to click
      modalDiv.firstChild.firstChild.click();
    }
    setModalVisible(true);
  };

  const hideAttrModal = () => {
    setModalVisible(false);
  };

  const attrModal = modalVisible
    ? ReactDOM.createPortal(
        <FooterModal onClose={hideAttrModal} />,
        document.getElementById("modal-root")
      )
    : null;

  return (
    <div className="footer">
      <ul className="footer-list">
        {props.extLinks.map((link, idx) => createFooterLinks(link, idx))}
      </ul>
      <div className="footer-copyright">
        <h4 className="copyright-text">
          Copyright &#169; Jeremy Bergevin 2020{" "}
          <i
            onClick={showAttrModal}
            className="attributions fas fa-external-link-square-alt"
          ></i>
          {attrModal}
        </h4>
      </div>
    </div>
  );
};

export default Footer;

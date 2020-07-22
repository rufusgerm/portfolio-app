import React from "react";
import ExtLink from "./ExtLink";
import "./Footer.css";

export default class Footer extends React.Component {
  createFooterLinks(extLink, idx) {
    let className = "footer-link";
    let name = extLink.title;
    let href = extLink.href;
    let iconName = extLink.icon;

    return (
      <li key={idx} className={className} name={name}>
        <ExtLink hRef={href} iconName={iconName + " fa-2x"} />
      </li>
    );
  }

  render() {
    return (
      <div className="footer">
        <ul className="footer-list">
          {this.props.extLinks.map((link, idx) =>
            this.createFooterLinks(link, idx)
          )}
        </ul>
        <div className="footer-copyright">
          <h4 className="copyright-text">
            Copyright &#169; Jeremy Bergevin 2020
          </h4>
        </div>
      </div>
    );
  }
}

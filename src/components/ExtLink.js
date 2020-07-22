import React from "react";

const ExtLink = (props) => {
  return (
    <React.Fragment>
      <a
        href={props.hRef}
        className="ext-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={props.iconName}></i>
      </a>
    </React.Fragment>
  );
};

export default ExtLink;

import React from "react";
import { useHistory } from "react-router-dom";

const SectionBtn = (props) => {
  const history = useHistory();

  function sectionBtnClick() {
    history.push(props.toSection);
  }
  return (
    <div className={"btn-container page-btn-" + props.direction}>
      <i
        className={
          "section-btn section-btn-" +
          props.direction +
          " fa fa-chevron-" +
          props.direction +
          " fa-lg"
        }
        onClick={sectionBtnClick}
      />
    </div>
  );
};

export default SectionBtn;

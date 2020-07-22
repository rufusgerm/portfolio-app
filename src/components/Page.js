import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import SectionBtn from "./SectionBtn";
import "./Page.css";

const pages = {
  Home,
  Projects,
  About,
  Contact,
};

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createPage() {
    const [TopSection, BottomSection] = this.createSections();
    let Component = pages[this.props.pageTitle];

    return (
      <React.Fragment>
        {TopSection}
        <Component className={"page-body"} />
        {BottomSection}
      </React.Fragment>
    );
  }

  createSections() {
    let idx = this.props.routePos;
    let arr = this.props.routeArr;
    let topSection;
    let bottomSection;

    if (idx !== arr.length - 1) {
      if (idx !== 0) {
        topSection = this.createBtn("up", arr[idx - 1].path);
      } else {
        topSection = this.createDeadBlock();
      }
      bottomSection = this.createBtn("down", arr[idx + 1].path);
    } else {
      topSection = this.createBtn("up", arr[idx - 1].path);
      bottomSection = this.createDeadBlock();
    }

    return [topSection, bottomSection];
  }

  createBtn(navDirection, navLocation) {
    const btn = <SectionBtn direction={navDirection} toSection={navLocation} />;
    return btn;
  }

  createDeadBlock() {
    const deadBlock = <div className="dead-block">&nbsp;</div>;
    return deadBlock;
  }

  render() {
    let title = this.props.pageTitle.toLowerCase();

    return (
      <div className={title + "-page page-wrapper"}>{this.createPage()}</div>
    );
  }
}

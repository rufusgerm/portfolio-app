import React from "react";
import { Link } from "react-router-dom";
import ExtLink from "./ExtLink";
import "./NavBar.css";

const MAX_WINDOW_WIDTH = 678;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarNavShowHide: "",
      spinChevron: "",
      fadeNavLinks: "",
    };
  }

  createNav(route, idx) {
    let className = "navbar-link " + this.state.fadeNavLinks;

    const navbarLink = !route.href ? this.navLink(route) : this.extLink(route);

    return (
      <li key={route + idx} className={className} name={route.title}>
        {navbarLink}
      </li>
    );
  }

  navLink(route) {
    return (
      <Link onClick={this.showHideSmallNavbar} to={route.path}>
        {route.title}
      </Link>
    );
  }

  extLink(route) {
    return (
      <ExtLink
        onClick={this.showHideSmallNavbar}
        hRef={route.href}
        iconName={route.icon}
      />
    );
  }

  showHideSmallNavbar = () => {
    if (window.innerWidth <= MAX_WINDOW_WIDTH) {
      let navClass = this.state.navbarNavShowHide ? "" : "navbar-nav-active";
      let chevronClass = this.state.spinChevron ? "" : "collapse-icon-spin";
      let navbarLinkClass = this.state.fadeNavLinks ? "" : "navbar-link-show";

      this.setState({
        navbarNavShowHide: navClass,
        spinChevron: chevronClass,
      });

      setTimeout(() => {
        this.setState({
          fadeNavLinks: navbarLinkClass,
        });
      }, 500);
    }
  };

  render() {
    return (
      <div className="navbar">
        <Link
          className="navbar-brand"
          to={this.props.routeNames[0].path}
          name={this.props.routeNames[0].title}
        >
          {this.props.navBrand}
        </Link>
        <ul className={"navbar-nav " + this.state.navbarNavShowHide}>
          {this.props.routeNames.map(function (route, idx) {
            if (idx > 0) {
              return this.createNav(route, idx);
            }
            return null;
          }, this)}
          {this.props.extLinks.map((route, idx) => this.createNav(route, idx))}
        </ul>
        <div className="navbar-collapse">
          <i
            onClick={this.showHideSmallNavbar}
            className={
              "fa fa-chevron-left fa-lg collapse-icon " + this.state.spinChevron
            }
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  }
}

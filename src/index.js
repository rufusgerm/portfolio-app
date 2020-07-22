import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubApp from "./components/SubApp";
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: "/",
      name: "Jeremy Bergevin",
      title: "jeremy.bergevin()",
      header: [
        {
          path: "/",
          title: "Home",
        },
        {
          path: "/about",
          title: "About",
        },
        {
          path: "/projects",
          title: "Projects",
        },
      ],
      externalLinks: [
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/bergevinjd/",
          icon: "fa fa-linkedin-square",
        },
        {
          title: "Github",
          href: "https://github.com/rufusgerm",
          icon: "fa fa-github-square",
        },
        {
          title: "Mail",
          href: "mailto:bergevinjd@gmail.com",
          icon: "fa fa-envelope-square",
        },
      ],
    };
  }

  render() {
    return (
      <Router>
        <Route path="*">
          <SubApp {...this.state} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));

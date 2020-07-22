import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Page from "./Page";

const SubApp = (props) => {
  let location = useLocation();

  return (
    <React.Fragment>
      <NavBar
        navBrand={props.title}
        routeNames={props.header}
        extLinks={props.externalLinks}
      />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={1000} classNames="fade">
          <Switch location={location}>
            {props.header.map((route, idx, arr) => (
              <Route
                key={idx}
                exact
                path={route.path}
                render={() => (
                  <Page routePos={idx} routeArr={arr} pageTitle={route.title} />
                )}
              />
            ))}
            {/* <Route component={Page404} /> */}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer extLinks={props.externalLinks} />
    </React.Fragment>
  );
};

export default SubApp;

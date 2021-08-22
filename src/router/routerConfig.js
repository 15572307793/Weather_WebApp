/*
 * @Autor: Jiang
 * @Date: 2021-08-22 16:14:42
 * @LastAutor: you name
 * @LastEditTime: 2021-08-22 17:15:52
 * @FilePath: /Weather_WebApp/src/router/routerConfig.js
 */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import getRouter from "./router";

const renderDetail = (pageType) => {
  try {
    require(`@pages/${pageType}`);
  } catch (err) {
    // let dynamicDetail = require("@component/NotFount").default;
    return dynamicDetail;
  }

  let dynamicDetail = require(`@pages/${pageType}`).default;
  return dynamicDetail;
};
const renderRouter = (routers) => {
  //   if (!Array.isArray(routers)) return null;
  return (
    <Switch>
      {routers.map((route, index) => {
        console.log(`route----`, route);
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }
        return (
          <Route
            key={route.key || index}
            exact={route.exact}
            strict={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

const RouterConfig = () => {
  return <Router>{renderRouter(getRouter())}</Router>;
};

export default RouterConfig;

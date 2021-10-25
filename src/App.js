import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Footer, Header, Sidebar, Body} from './Layout';
import {Domens, Journal, User, Vps, Main} from './pages';

import style from './style.module.scss';

const routes = [
  {
    path: "/journal",
    exact: true,
    component: Journal,
  },
  {
    path: "/domens",
    exact: true,
    component: Domens,
  },
  {
    path: "/vps",
    exact: true,
    component: Vps,
  },
  {
    path: "/user",
    exact: true,
    component: User,
  },
  {
    path: "/",
    exact: true,
    component: Main,
  },
];

const App = () => {
  return (
    <Router>
      <div className = {style.wrapper}>

        <Sidebar className = {style.sidebar}/>

        <Header className={style.header}/>

        <Body className={style.body}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  />
              ))}
            </Switch>
        </Body>

        <Footer className={style.footer}/>

    </div>

    </Router>
  );
};

export default App;

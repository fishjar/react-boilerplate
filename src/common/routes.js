// import { HashRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, NoMatch, Login, Users, User } from "../pages";

export const PATH_HOME = "/"; // 首页
export const PATH_LOGIN = "/login"; // 登录
export const PATH_USERS = "/users"; // 用户
export const PATH_NOMATCH = "*"; // 404 页面

/**
 * 路由
 */
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH_HOME}>
          <Home />
        </Route>
        <Route exact path={PATH_LOGIN}>
          <Login />
        </Route>
        <Route exact path={PATH_USERS}>
          <Users />
        </Route>
        <Route exact path={`${PATH_USERS}/:id`}>
          <User />
        </Route>
        <Route path={PATH_NOMATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

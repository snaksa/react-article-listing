import React from "react";
import "./App.scss";
import ListingPage from "./pages/ListingPage/ListingPage";
import ArticlePage from "./pages/ArticlePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Languages } from "./enums/Languages";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Router>
          <Switch>
            <Route path={"/:lang/articles/:id"}>
              <ArticlePage />
            </Route>

            <Route path={"/:lang"}>
              <ListingPage />
            </Route>

            <Redirect from={"/"} to={`/${Languages.en}`} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

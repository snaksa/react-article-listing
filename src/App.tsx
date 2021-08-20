import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AnonymousTemplate from "./templates/AnonymousTemplate/AnonymousTemplate";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ListingPage from "./pages/ListingPage/ListingPage";
import { Languages } from "./enums/Languages";
import AdminListingPage from "./pages/AdminiListingPage/AdminListingPage";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Router>
          <div className="content">
            <Switch>
              <Route path={"/:lang/articles/:id"}>
                <AnonymousTemplate>
                  <ArticlePage />
                </AnonymousTemplate>
              </Route>

              <Route path={"/:lang/administration"}>
                <AdminListingPage />
              </Route>

              <Route path={"/:lang"}>
                <AnonymousTemplate>
                  <ListingPage />
                </AnonymousTemplate>
              </Route>

              <Redirect from={"/"} to={`/${Languages.en}`} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

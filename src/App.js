import React from "react";

import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/dashboard/Home";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import FullPost from "./components/dashboard/FullPost";

export default function App() {
  const { isAuthenticated, isVerifying } = useSelector(state => state.auth);
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute
        exact
        path="/:postId"
        component={FullPost}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
    </Switch>
  );
}

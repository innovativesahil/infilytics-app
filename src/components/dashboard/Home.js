import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions";
import Posts from "./Posts";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div>
        <Posts />
      </div>
    </div>
  );
}

function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const { isLoggingOut, logoutError } = useSelector(state => state.auth);
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      {isLoggingOut && <p>Logging Out....</p>}
      {logoutError && <p>Error logging out</p>}
    </>
  );
}

// List of posts : GET : https://jsonplaceholder.typicode.com/posts
// To get a single post : GET : https://jsonplaceholder.typicode.com/posts/{id}
// Comments of a post : GET : https://jsonplaceholder.typicode.com/posts/{id}/comments

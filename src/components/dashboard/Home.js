import React from "react";
import Header from "./Header";
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

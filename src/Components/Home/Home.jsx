import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Button from "../Common/Button";

const Home = () => {
  return (
    <section className="section">
      <h1>Welcome to the Hacker News Clone!</h1>
      <h4>Click on a Button to go to a page</h4>
      <div className="flex">
        <Button link="/counter" title="Counter" />
        <Button link="/counter5" title="Counter + 5" />
        <Button link="/name" title="Name" />
        <Button link="/todo" title="Todo" />
      </div>
    </section>
  );
};

export default Home;

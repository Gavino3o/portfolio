import classes from "./Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const urls = ["profile_pic.jpg", "about_me.jpg", "learn_more.jpg"];
  const [personState, setPersonState] = useState(0);
  // useState(arg) returns an array with 2 items to match the two variables "personState" and "setpersonState"
  // sets the first item, "personState", as 0, and the second item is React's default function (implementation not needed to be known)

  const captions = [
    "Hi, I'm Gavin. Welcome to my profile.",
    "Here you can learn a lot about me.",
    "Let's take a look at what I'm up to"
  ];

  return (
    <div className={classes.app}>
      <div className={classes.introtext}>
        <h1>Hi there! My name is</h1>
        <h1>{captions[personState]}</h1>
      </div>
      <div className={classes.photo}>
        <img
          src={urls[personState]}
          onClick={() =>
            setPersonState(personState === 2 ? 0 : personState + 1)
          }
          alt="capybara."
        ></img>
      </div>
    </div>
  );
}

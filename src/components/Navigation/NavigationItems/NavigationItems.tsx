import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      バーガー作成
    </NavigationItem>
    <NavigationItem link="/">お会計</NavigationItem>
  </ul>
);

export default navigationItems;

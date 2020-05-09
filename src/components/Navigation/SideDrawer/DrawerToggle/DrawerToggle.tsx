import React from "react";
import classes from "./DrawerToggle.module.css";

type DrawerToggleProps = {
  clicked: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const drawerToggle: React.FC<DrawerToggleProps> = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;

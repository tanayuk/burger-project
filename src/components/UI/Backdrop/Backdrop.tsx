import React from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {}

const backdrop = (props: any) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;

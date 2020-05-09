import React from "react";

import classes from "./BuildControl.module.css";

interface BuildControlProps {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

const buildControl = (props: BuildControlProps) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.added}>
      増やす
    </button>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      減らす
    </button>
  </div>
);

export default buildControl;

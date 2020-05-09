import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "野菜", type: "salad" },
  { label: "ベーコン", type: "bacon" },
  { label: "チーズ", type: "cheese" },
  { label: "肉", type: "meat" },
];

interface BuildControlsProps {
  ingredientAdded: (type: any) => void;
  ingredientRemoved: (type: any) => void;
  disabled: any;
  price: number;
  purchasable: boolean;
  ordered: any;
}

const buildControls = (props: BuildControlsProps) => (
  <div className={classes.BuildControls}>
    <p>
      現在の値段: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      注文する
    </button>
  </div>
);

export default buildControls;

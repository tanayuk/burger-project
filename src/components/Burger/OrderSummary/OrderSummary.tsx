import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

type OrderSummaryProps = {
  purchaseCanceled: () => void;
  ingredients: any;
  price: number;
  purchaseContinued: () => void;
};

class OrderSummary extends Component<OrderSummaryProps> {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>あなたの注文</h3>
        <p>下記のトッピングのおいしいハンバーガー</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>合計：{this.props.price.toFixed(2)}</strong>
        </p>
        <p>会計をしますか？</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          キャンセル
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          お会計へ
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

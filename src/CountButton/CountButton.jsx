import { useState, useEffect } from "react";
import "./CountButton.css";

function CountButton(props) {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = props.data[props.data.length - 1];
  function checkExpressionType() {
    if (expressions.test(lastNumber)) {
      return;
    }
    props.onClick(props.data + props.expression);
  }
  return (
    <button
      onClick={() => {
        checkExpressionType();
      }}
      className="keyboard__expression"
    >
      {props.expression}
    </button>
  );
}

export default CountButton;

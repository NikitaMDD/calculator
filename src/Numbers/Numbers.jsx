import { useEffect, useState } from "react";
import "./Numbers.css";

function Numbers(props) {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((number) => {
    return (
      <button
        onClick={(event) => {
          if(props.data != "0") {
            props.onClick(props.data + event.target.innerHTML);
          } else {
            props.onClick(event.target.innerHTML);
          }
        }}
        key={number}
        className="keyboard__buttons"
      >
        {number}
      </button>
    );
  });
  return <>{nums}</>;
}

export default Numbers;

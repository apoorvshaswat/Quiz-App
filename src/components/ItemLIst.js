import React from "react";
import Item from "./Item";

export default function ItemLIst(props) {
  return (
    <>
      <div className="div">{props.title}</div>

      <div className="flex flex-row h-56 gap-5 ml-5 mt-5 mb-5">
        {props.Quiz.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </>
  );
}

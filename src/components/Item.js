import React from "react";

export default function Item(props) {
  return (
    <div className="div">
      <div className="div"></div>
      <div className="h-52 w-80 bg-red-500 rounded-lg ">{props.item.name}</div>
    </div>
  );
}

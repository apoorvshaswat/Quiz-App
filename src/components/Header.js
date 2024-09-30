import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 h-[10vh] md:p-5 px-10">
      <div className="text-2xl md:text-3xl font-bold">Quiz</div>
      <ul className="flex space-x-2 md:space-x-5 text-xl md:text-3xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/">Register</Link>
        </li>
      </ul>
    </div>
  );
}

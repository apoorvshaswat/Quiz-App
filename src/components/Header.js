import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-between bg-yellow-400 h-[10vh] p-5 px-10">
      <div className="text-3xl">Quiz</div>

      <div className="flex flex-row ">
        <ul className="flex flex-row space-x-8 text-3xl">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

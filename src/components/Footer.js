import React from "react";

export default function Footer() {
  return (
    <div className="bg-yellow-400 text-white text-center p-4 flex flex-col md:flex-row justify-between items-center">
      <div>Quizard © Copyright 2024. All rights reserved.</div>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
        <a href="#" className="">
          About Us
        </a>
        <a href="#" className="">
          Contact Us
        </a>
        <a href="#" className="">
          Privacy & Cookies Policy
        </a>
        <a href="#" className="">
          Terms and Conditions
        </a>
        <a href="#" className="">
          Disclaimer
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div className="bg-yellow-400 text-white text-center p-4 flex flex-col md:flex-row justify-between items-center">
      <div>Quizard © Copyright 2024. All rights reserved.</div>
      <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 list-none">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy & Cookies Policy</li>
        <li>Terms and Conditions</li>
        <li>Disclaimer</li>
      </ul>
    </div>
  );
}

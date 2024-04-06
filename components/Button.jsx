"use client";
import React from "react";

function Button({ title, style }) {
  return (
    <a
      className={"btn " + style}
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      {title}
    </a>
  );
}

export default Button;

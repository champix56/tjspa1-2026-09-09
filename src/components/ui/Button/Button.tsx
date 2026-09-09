import React from "react";
const Button = ({text}) => {
  console.trace(text);

  return <button className="Button">{text}</button>;
};
export default Button;

import React from "react";
const Button = ({text,st="une chaine par default "}) => {
  console.trace(text);

  return <button className="Button">{text}</button>;
};
export default Button;

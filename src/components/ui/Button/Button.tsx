import React from "react";
import style from "./Button.module.css";
interface IButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  parentOnClickAction?: Function;
  bgcolor: "tomato" | "skyblue" | "aquamarine";
  className?:'primary'|'warning'
  //demo
  chOrNum?: string | number;
  numb?: number;
  bl?: boolean;
  nu?: null;
  un?: undefined;
  st?: string;

  fn2?: (arg: number) => void;
  obj?: { abc: any };
  arr?: number[];
  balise?: React.ReactNode;
}
const Button = ({
  text,
  type = "button",
  parentOnClickAction,
  className="primary"
}: IButtonProps) => {
  console.trace(text, type);

  return (
    <button
      className={`${style.Button} ${style[className]}`}
      onClick={(evt) => {
        // console.log(evt);
        if (undefined !== parentOnClickAction) {
          parentOnClickAction(evt);
        }
      }}
    >
      {text}
    </button>
  );
};
export default Button;

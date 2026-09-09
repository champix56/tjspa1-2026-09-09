import React from "react";
import style from './Button.module.css'
interface IButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  parentOnClickAction?: Function;
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
const Button = ({ text, type = "button", parentOnClickAction }: IButtonProps) => {
  console.trace(style);

  return (
    <button
      className={style.Button}
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

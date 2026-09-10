import React from "react";
import stylecss from "./Button.module.css";
interface IButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  parentOnClickAction?: Function;
  bgcolor?: "tomato" | "skyblue" | "aquamarine";
  style?:React.CSSProperties;
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
const Button:React.FC<IButtonProps> = ({
  text,
  type = "button",
  bgcolor,
  style,
  parentOnClickAction,
  className="primary"
}) => {
  console.trace(text, type);

  return (
    <button
      className={`${stylecss.Button} ${stylecss[className]}`}
      style={{...style,backgroundColor:bgcolor}}
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

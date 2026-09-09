import React from "react";
interface IButtonProps {
  text: string;
  type:'submit'|'reset'|'button';  
  fn?: Function;
  //demo
  chOrNum?:string|number
  numb?: number;
  bl?: boolean;
  nu?: null;
  un?: undefined;
  st?: string;

  fn2?: (arg: number) => void;
  obj?: {abc:string};
  arr?: number[];
  balise?: React.ReactNode;
}
const Button = (props: IButtonProps) => {
  console.trace(props);

  return <button className="Button">{props.text}</button>;
};
export default Button;

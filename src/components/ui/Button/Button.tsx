import React, { useEffect, useState } from "react";
import stylecss from "./Button.module.css";
import TemplateName from "../../TemplateName/TemplateName.lazy";
interface IButtonProps {
  text?: string;
  type?: "submit" | "reset" | "button";
  parentOnClickAction?: Function;
  bgcolor?: "tomato" | "skyblue" | "aquamarine";
  style?:React.CSSProperties;
  className?:'primary'|'warning';
  children:string|React.ReactElement|Array<React.ReactNode>
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
  //type = "button",
  bgcolor,
  style,
  children,
  parentOnClickAction,
  className="primary"
}) => {
 // console.trace(text, type);
const [isClicked, setisClicked] = useState({value:false, duree:500, color:'blue'})
useEffect(() => {
   //setisClicked({value:false})
}, [isClicked.value])


  type T_AssembleChildren=()=>React.ReactNode
  const getChildren:T_AssembleChildren=()=>{
    if(text){
      return text
    }
    else if((children instanceof Array && children.length) || children){return children}
    else return 'button'
  }

  return (
    <button
      className={`${stylecss.Button} ${stylecss[className]}`}
      style={{...style,backgroundColor:bgcolor}}
      onClick={(evt) => {
        setisClicked({...isClicked,value:true})
        // console.log(evt);
        if (undefined !== parentOnClickAction) {
          parentOnClickAction(evt);
        }
      }}
    >
            <TemplateName/>
      {/* {undefined!==text?text:children} */}
      {getChildren()}
    </button>
  );
};
export default Button;

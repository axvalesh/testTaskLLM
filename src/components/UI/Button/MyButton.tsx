import React from "react";
import cl from './MyButton.module.css'


type colorType = 'white' | 'yellow'
interface Button {
    children: React.ReactNode;
    colorType?: colorType;
    type?: "button" | "submit" | "reset" | undefined;
}
const MyButton = ({children,colorType,type="button"}: Button) => {

    const dynamicClassName = colorType ? cl[colorType] : cl['white']

    return (
      <button type={type} className={`${dynamicClassName} ${cl.button}`}>
           {children}
      </button>
    );
};

export default MyButton;
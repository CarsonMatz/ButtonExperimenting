import { hover } from '@testing-library/user-event/dist/hover';
import React, {FC, useState, ReactElement} from 'react';
import { isConstructorTypeNode } from 'typescript';

export const BUTTON_CLASSNAMES : string = 
    "";

// factories
export const mkHandleMouseEnter = (setHovered : (isHovered : boolean)=>void) => () => {
    setHovered(true);
};
export const mkHandleMouseLeave = (setHovered : (isHovered : boolean)=>void) => () => {
    setHovered(false);
};

/* export const mkOnClickAsynch = (setClick : (isClick : number)=>void) => () => {
    setClick(isClick + 1);
}; */

//general css for button, can be altered or spoofed up
export const BUTTON_STYLE : React.CSSProperties = {
    backgroundColor: '#33b863',
    opacity: '1',
    border: '2px solid #636363',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    padding: '15px 15px',
    margin: '5px 5px',
    display: 'inline-block',
    textAlign: 'center',   
};

export const LOADER_STYLE : React.CSSProperties = {
    border: '16px solid #f3f3f3', /* Light grey */
    border-top: '16px solid #3498db', /* Blue */
    border-radius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
};

export type ButtonProps = {
    style ? : React.CSSProperties;
   // onClick: () => void; //takes in-line function
    variant?: string; // default, submit, continue, info, exit ...
    size?: string; // sm, md, lg ...
    text: string;
};

export const Button : FC<ButtonProps>  = ({
    style,
   // onClick,
    variant = 'default',
    size = 'md',
    text,
}) =>{

    const [isHovered, setHovered] = useState(false);
    const [isLoading, setLoading] = useState(false);

   // use your factory
   const handleMouseEnter = mkHandleMouseEnter(setHovered);
   const handleMouseLeave = mkHandleMouseLeave(setHovered);

   toggleLoader = () => {
       setLoading(!isLoading)
   }

   const handleClickAsync = mkOnClickAsynch(setClick);

   function Normal(ButtonProps) {
       return
   }

   return (
        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={BUTTON_CLASSNAMES}
        onClick={handleClickAsync}
        style={{
            ...BUTTON_STYLE,
            ...style,
            ...!isHovered ? BUTTON_STYLE : {opacity: '0.8'}
            ...isLoading ? BUTTON_STYLE : {(LOADER_STYLE)}
            }}>
            {text}
        </button>
    )
};
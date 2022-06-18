import { render } from '@testing-library/react';
import { hover } from '@testing-library/user-event/dist/hover';
import React, {FC, useState, ReactElement, useEffect} from 'react';
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

/* export const LOADER_STYLE : React.CSSProperties = {
    opacity: '1',
    border: '2px solid #000000',
    fontFamily: 'sans-serif',
    padding: '15px 15px',
    margin: '5px 5px',
    display: 'inline-block',
    textAlign: 'center',
}; */

export function handleClick(action: () => void) {
    function isLoading() {
        setTimeout(() => {
            render({
                //change CSS to make spinner appear instead of button
            })
        }, 1000)
    }

    isLoading()
    .then(
        action();
    )
}


export type ButtonProps = {
    style ? : React.CSSProperties;
    onClick: () => void; //takes in-line function
    variant?: string; // default, submit, continue, info, exit ...
    size?: string; // sm, md, lg ...
    text: string;
};

export const Button : FC<ButtonProps>  = ({
    style,
    onClick,
    variant = 'default',
    size = 'md',
    text,
}) =>{

    const [isHovered, setHovered] = useState(false);
    //const [isLoading, setLoading] = useState(false);

   // use your factory
   const handleMouseEnter = mkHandleMouseEnter(setHovered);
   const handleMouseLeave = mkHandleMouseLeave(setHovered);

   /* toggleLoader = () => {
       setLoading(!isLoading)
   } */

   //const handleClickAsync = mkOnClickAsynch(setClick);

   /* function Normal(ButtonProps) {
       return
   } */


   return (
        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={BUTTON_CLASSNAMES}
        onClick={handleClick(onClick)}
        style={{
            ...BUTTON_STYLE,
            ...style,
            ...!isHovered ? BUTTON_STYLE : {opacity: '0.8'}
            }}>
            {text}
        </button>
    )
};
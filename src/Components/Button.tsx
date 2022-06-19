import React, {FC, useState, useEffect, useReducer} from 'react';
import { keyframes } from "styled-components";

export const BUTTON_CLASSNAMES : string = 
    "";

// factories
export const mkHandleMouseEnter = (setHovered : (isHovered : boolean)=>void) => () => {
    setHovered(true);
};
export const mkHandleMouseLeave = (setHovered : (isHovered : boolean)=>void) => () => {
    setHovered(false);
};

//global declaration of button states
export type ButtonState = "default" | "loading" | "err" | "success";

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

export function loader() {
    let spin = keyframes `0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }`;
    return spin;
};
export const LOADING_STYLE : React.CSSProperties = {
    border: '10px solid #f3f3f3',
    borderTop: '10px solid #3498db',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    animation: '${loader()} 1s linear infinite',
};

export type ButtonProps = {
    style ? : React.CSSProperties;
    onClick: () => Promise<any>; //takes in-line function
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

    const [buttonState, setButtonState] = useState<ButtonState>("default");
    /* const [myTimeout, setMyTimeout] = useReducer<NodeJS.Timeout|undefined>((oldTimeout: NodeJS.Timeout, timeout : NodeJS.Timeout)=>{
          clearTimeout(oldTimeout);
          return timeout;
    }, undefined); */

    const [isHovered, setHovered] = useState(false);

   // use your factory
   const handleMouseEnter = mkHandleMouseEnter(setHovered);
   const handleMouseLeave = mkHandleMouseLeave(setHovered);

   const handleClickAsync = async ()=>{
    const delay = (ms: number | undefined) => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    // set buttonState to loading
    setButtonState("loading");
    console.log("loading");
    await delay(5000);
    // dispatch the onclick
    const err = await onClick();

    // if there's an error dispatch update to button state
    // that shows error
    if(err){
        setButtonState("err");
        style : {

        }
        console.log("error");
    } else if(!err){
        setButtonState("success");
        console.log("success");
    }

    setTimeout(()=>{
        // set the dispatch back to default
        setButtonState("default");
        console.log("default");
    }, 1000);

}
    if(buttonState === 'default'){
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
                }}>
                {text}
            </button>
        )
    }
    if(buttonState === 'loading'){
        return (
            <button
            className={BUTTON_CLASSNAMES}
            onClick={handleClickAsync}
            style={{
                ...LOADING_STYLE,
                ...style,
                }}>
            </button>
        )
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
            }}>
            {text}
        </button>
    )
};


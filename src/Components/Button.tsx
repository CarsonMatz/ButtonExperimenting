import { hover } from '@testing-library/user-event/dist/hover';
import React, {FC, useState, ReactElement} from 'react';

export const BUTTON_CLASSNAMES : string = 
    "";

// couldn't figure out how to get hover to work, click only works with inline code (don't know if that's bad practice here)
/* export const [isHovering, setIsHovering] = useState(false);

export const handleMouseEnter = () => {
    setIsHovering(true);
};

export const handleMouseLeave = () => {
    setIsHovering(false);
}; */

//general css for button, can be altered or spoofed up
export const BUTTON_STYLE : React.CSSProperties = {
    backgroundColor: '#33b863',
    //opacity: isHovering ? '0' : '0.3',
    opacity: '1',
    border: '2px solid #636363',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    padding: '15px 15px',
    margin: '5px 5px',
    display: 'inline-block',
    textAlign: 'center',

    //classes for generic button sizes/types... could be implemented as well
    //classes could be used with hover perhaps
    /* 
    .sm{  },
    .md{  },
    '&:hover': {
        opacity: '0.3'
    }, */
};

export type ButtonProps = {
    style ? : React.CSSProperties;
    //onMouseOver ? : () => {changeBackground()};
    onMouseOver ? : () => void; //doesn't work
    onClick: () => void; //takes in-line function
    variant?: string; // default, submit, continue, info, exit ...
    size?: string; // sm, md, lg ...

    //another unsuccesful attempt at hover
    hover ? : {
        opacity: '0.3'
    };
};


//expirementing more with hover
/* export const onMouseOverHandler = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    const Button: HTMLButtonElement = event.currentTarget;
    BUTTON_STYLE.opacity = '0.3';
}; */

/* export function changeBackground() {
    BUTTON_STYLE.opacity = '0.3';
}; */


export const Button : FC<ButtonProps>  = ({
    style,
    onMouseOver,
    onClick,
    variant = 'default',
    size = 'md',
}) =>{

    return (
        <div
        className={BUTTON_CLASSNAMES}
        onClick={onClick}
        style={{...BUTTON_STYLE, ...style}}>
            Testing
        </div>
    )
};
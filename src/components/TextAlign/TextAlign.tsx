import React, {useContext} from "react";
import './TextAlign.scss'
import {MyContext} from "../../App";


const TextAlign = () => {
    const {globalState, setGlobalState} = useContext<any>(MyContext);
    const  { align } = globalState;
    const handleClick = (align: string) => () => {
        setGlobalState((prev:object) => ({...prev, align}))
    }
    return (
        <div className="text-align">
            <div className={`col text-align-left ${align === "left" ? 'active' : ''}`} onClick={handleClick('left')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect y="13.0001" width="10" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </div>
            <div className={`col text-align-center ${align === "center" ? 'active' : ''}`} onClick={handleClick('center')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="4" y="13.0001" width="8" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </div>
            <div className={`col text-align-right ${align === "right" ? 'active' : ''}`} onClick={handleClick('right')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="6" y="13.0001" width="10" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </div>
            <div className={`col text-align-justify ${align === "justify" ? 'active' : ''}`} onClick={handleClick('justify')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect y="13.0001" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </div>
        </div>
    )
}

export default TextAlign
import React, {useContext} from "react";
import './TextStyle.scss'
import {MyContext} from "../../App";

const TextStyle = () => {
    const {globalState, setGlobalState} = useContext<any>(MyContext);
    const  { lineHeight, letterSpacing } = globalState;
    const changeLineHeight = (e:any) => {
        if(e.target.value < 0) {
            return
        }
        setGlobalState((prev:any)=>({...prev, lineHeight:e.target.value}))
    }
    const changeLetterSpace = (e:any) => {
        setGlobalState((prev:any)=>({...prev, letterSpacing:e.target.value}))
    }
    return(
        <div className="text-style">
            <div className="line-height-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 13H16V15H6L8 13Z" fill="#AAB2BB"/>
                    <rect x="6" y="5" width="10" height="2" fill="#AAB2BB"/>
                    <rect x="6" y="9" width="10" height="2" fill="#AAB2BB"/>
                    <path d="M6 1H16V3H8L6 1Z" fill="#AAB2BB"/>
                    <path d="M3 1.5L2.5 2L3.5 2L3 1.5ZM3 1.5L3.00001 14.5M3.00001 14.5L3.50001 14H2.5L3.00001 14.5Z" stroke="#AAB2BB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                    type="number"
                    onChange={changeLineHeight}
                    step="1"
                    value={lineHeight}
                    className='line-height-input'
                />
            </div>
            <div className="letter-spacing-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0)">
                        <path d="M8 0L8.92164 -0.388057C8.7655 -0.758871 8.40234 -1 8 -1C7.59766 -1 7.2345 -0.758871 7.07836 -0.388057L8 0ZM10.8 8C11.3523 8 11.8 7.55228 11.8 7C11.8 6.44772 11.3523 6 10.8 6V8ZM4.92164 9.88806L8.92164 0.388057L7.07836 -0.388057L3.07836 9.11194L4.92164 9.88806ZM7.07836 0.388057L11.0784 9.88806L12.9216 9.11194L8.92164 -0.388057L7.07836 0.388057ZM5.2 8H10.8V6H5.2V8Z" fill="#AAB2BB"/>
                        <path d="M1.5 13L2 13.5L2 12.5L1.5 13ZM1.5 13L14.5 13M14.5 13L14 12.5L14 13.5L14.5 13Z" stroke="#AAB2BB" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)"/>
                        </clipPath>
                    </defs>
                </svg>
                <input
                    type="number"
                    onChange={changeLetterSpace}
                    step=".1"
                    value={letterSpacing}
                    className='letter-spacing-input'
                />
            </div>
        </div>
    )
}

export default TextStyle
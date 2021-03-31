import React, { useState} from "react";
import './FontSize.scss'
import OutSideClick from "../../../customHooks/useDropDownCloser";

const FontSize = () => {
    const fontsData = [
        {number:1,size:'10px'},
        {number:2,size:'13px'},
        {number:3,size:'16px'},
        {number:4,size:'18px'},
        {number:5,size:'24px'},
        {number:6,size:'32px'},
        {number:7,size:'48px'},
    ]
    const [size, setSize] = useState(fontsData[0].size);
    const [openDropDown, setOpenDropDown] = useState(false);


    const toggleDropDown = (id:any) => {
        setOpenDropDown(!openDropDown)
        if(id) {
            setSize(fontsData[id-1].size)
            document.execCommand('fontSize',false, id)
        }
    }

    const hideDropDown = () => {
        setOpenDropDown(false)
    }

    return(
        <OutSideClick closedFunc={hideDropDown}>
            <div className="font-size">
                <div className="font-size-change" onClick={()=>toggleDropDown(null)}>
                    <div className="font-size-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 4H4V14H6V4H10V3V2H0V4Z" fill="#AAB2BB"/>
                            <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill="#AAB2BB"/>
                        </svg>
                    </div>
                    <input type="text" readOnly={true} className="font-size-input" value={size}/>
                </div>

                <div className={`dropdown ${!openDropDown ? 'd-none' : ''}`}>
                    <ul>
                        {
                            fontsData.map(size => {
                                return(
                                    <li
                                        key={size.number}
                                        onClick={()=>toggleDropDown(size.number)}
                                    >{size.size}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </OutSideClick>
    )
}

export default FontSize
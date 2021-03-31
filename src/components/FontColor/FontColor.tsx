import React, {useState} from "react";
import './FontColor.scss'

const FontColor = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [color, setColor] = useState("#000000")
    const toggleDropDown = (e:any) => {
        setOpenDropDown(!openDropDown)
    }
    const handleChange = (e:any) => {
        document.execCommand('foreColor',false, e.target.value)
        setColor(e.target.value)
    }

    return(
        <div className="font-color">
            <div className={`font-color-select`}>
                <input
                    type="color"
                    value={color}
                    onChange={handleChange}
                    onClick={toggleDropDown}
                />
                <div className="color-background" style={{backgroundColor:color}} />
                <p className="color-value">{color}</p>
            </div>
        </div>
    )
}

export default FontColor
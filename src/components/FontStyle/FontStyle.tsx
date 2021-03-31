import React from "react";
import "./FontStyle.scss"
import FontWeight from "./FontWeight";
import FontSize from "./FontSize";


const FontStyle = () => {

    return(
        <div className="font-style">
            <FontWeight/>
            <FontSize/>
        </div>
    )
}

export default FontStyle
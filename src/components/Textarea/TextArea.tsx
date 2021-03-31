import React, { useRef, useContext} from "react";
import ContentEditable from 'react-contenteditable'
import "./TextArea.scss"
import {MyContext} from "../../App";

const TextArea = () => {

    const {globalState, setGlobalState} = useContext<any>(MyContext);
    const  { data, align, lineHeight, letterSpacing } = globalState;
    const contentEditable = useRef(null);

    const handleChange = (evt:any) => {
        setGlobalState((prev:any) => ({...prev, data: {...prev.data, html: evt.target.value}}));
    };



    return (<div className={'textarea'} >
        <div className={'editor'}>
            <ContentEditable
            innerRef={contentEditable}
            html={data.html} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={handleChange} // handle innerHTML change
            tagName='article' // Use a custom HTML tag (uses a div by default)
            style={{textAlign:`${align}`, lineHeight: `${lineHeight}%`, letterSpacing: `${letterSpacing}px`}}
        />
        </div>
    </div>)
};

export default  TextArea
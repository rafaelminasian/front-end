import React,{useRef } from 'react'
import "./Sidebar.scss"
import AutoComplete from "../AutoComplete";
import FontStyle from "../FontStyle";
import FontColor from "../FontColor";
import TextStyle from "../TextStyle";
import TextAlign from "../TextAlign";

const Sidebar = (props:any) => {

    const {saveChanges} = props;

    const editableData:any = useRef(null);

    const saveSelection = function() {
        let sel:any = document.getSelection(), ranges = [];
        if (sel.rangeCount) {
            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
        }
        return ranges;
    };

    const restoreSelection = function(savedSelection:any) {
        let sel:any = document.getSelection();
        sel.removeAllRanges();
        for (let i = 0, len = savedSelection.length; i < len; ++i) {
            sel.addRange(savedSelection[i]);
        }
    };

    const down = function() {
        editableData.current = saveSelection();
    };

    const up = function() {
        restoreSelection(editableData.current);
    };

    return(
        <div className="sidebar"
             onMouseDown={down}
             onMouseUp={up}
        >
            <div className="sidebar-wrapper">
                <p className="sidebar-title">Text</p>
                <AutoComplete/>
                <FontStyle/>
                <FontColor/>
                <TextStyle/>
                <TextAlign/>
                <button className="save-change-btn" onClick={saveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default Sidebar
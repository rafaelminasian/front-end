import React, {useContext, useMemo, useState, useRef, useCallback} from "react";
import "./AutoComplete.scss"
import {MyContext} from "../../App";
import OutSideClick from "../../customHooks/useDropDownCloser";


const AutoComplete = () => {
    const [filterFont, setFilterFont] = useState('');
    const {globalState} = useContext<any>(MyContext);
    const {fonts} = globalState;
    const [currentFont, setCurrentFont] = useState(fonts[0]?.family);
    const [openedModal, setOpenedModal] = useState(false);
    const searchInp = useRef(null);

    const toggleModal = () => {
        setOpenedModal(!openedModal)
    }

    const hideModal = () => {
        setOpenedModal(false)
    }

    const setFont = useCallback((fName: string) => {
            document.execCommand('fontName', false, fName)
            setCurrentFont(fName)
            hideModal()
        }
        , [])
    const fontFamilyFilter = (event: any) => {
        setFilterFont(event.target.value)
    }

    const filtereddata = useMemo(() => {
        return fonts.filter((font: any) => font.family.toLowerCase().includes(filterFont.toLowerCase()))
            .map((font: any, index: any) => {
                return <li
                    onClick={() => setFont(font.family)}
                    style={{fontFamily: `${font.family}, sans-serif`}}
                    className='font-list-item'
                    key={index}
                >{font.family}</li>
            })
    }, [fonts, filterFont, setFont])


    return (
        <OutSideClick closedFunc={hideModal}>
            <div className="autocomplete">
                <div onClick={toggleModal}>
                    <input
                        type="text"
                        value={currentFont ? currentFont : 'ABeeZee'}
                        readOnly={true}
                        className="autocomplete-value"
                        style={{fontFamily: `${currentFont ? currentFont : 'Abezze'}`}}
                    />
                    <div className="arrow-bottom-icon"/>
                </div>
                <div
                    className={`search-modal ${!openedModal ? 'd-none' : ''}`}
                >
                    <input
                        type="search"
                        placeholder='Search'
                        onChange={fontFamilyFilter}
                        className="search"
                        ref={searchInp}
                    />
                    <ul className="font-list">
                        {fonts.length && filtereddata}
                    </ul>
                </div>
            </div>
        </OutSideClick>
    )
}

export default AutoComplete
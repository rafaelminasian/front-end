import React, {useRef, useEffect} from "react";

function useDropDownCloser(ref:any,closedFunc:any) {
    useEffect(()=>{
        function handleClickOutside(event:any):any {
            if(ref.current && !ref.current.contains(event.target)){
                closedFunc()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[ref, closedFunc])
}

export default function OutSideClick(props:any) {
    const wrappedRef:any = useRef();
    useDropDownCloser(wrappedRef,props?.closedFunc)

    return <div ref={wrappedRef}>{props.children}</div>
}
import React, {useEffect, useState} from 'react'
import "./app.scss"
import TextArea from "./components/Textarea";
import Sidebar from "./components/Sidebar";
import {fetchData, getContent, postContent} from "./service/service";
// import WebFont from "webfontloader";
import Loader from "./components/Loader";
import Saved from "./components/Saved";
export const MyContext = React.createContext({})

const App = () => {
    const [globalState, setGlobalState] = useState({
        data: {html: ''},
        align: 'left',
        fonts: [],
        selectedFont: {},
        lineHeight: 100,
        letterSpacing: 1
    });
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false)
    useEffect(() => {
        fetchData.then(data => {
            setGlobalState((prevState) => {
                return {
                    ...prevState,
                    fonts: data.items
                }
            })
        })
    },[])

    useEffect(()=>{
        getContent.then(getText => {
            setGlobalState(prevState => {
                return{
                    ...prevState,
                    data:{html:getText.body}
                }
            })
            setLoading(false)
        })
    },[])

    // useEffect(() => {
    //     if(globalState.fonts.length) {
    //         WebFont.load({
    //             google:{
    //                 families: globalState.fonts.map((font:any)=>font.family)
    //             },
    //             active(): void {
    //                 setLoading(false)
    //             }
    //         })
    //     }
    // },[globalState.fonts])


    const saveChanges = () => {
        postContent({text: globalState.data.html}).then(res => {
            if(res.status === 200){
                setDone(true)
                setTimeout(()=>{
                    setDone(false)
                },1500)
            }else{
                alert("ERROR")
            }
        })
    }

    return(
        <div className="App">
            <MyContext.Provider value={{globalState, setGlobalState}}>
                {
                    loading ?
                        <div className='loader'>
                            <Loader />
                        </div>
                        :
                        <>
                            <TextArea  />
                            <Sidebar saveChanges={saveChanges} />
                            {
                                done ?
                                    <Saved/>
                                    :
                                    ""
                            }
                        </>
                }
            </MyContext.Provider>
        </div>
    )
}

export default App
import React, {useState} from "react";
import './FontWeight.scss'
import OutSideClick from "../../../customHooks/useDropDownCloser";

const FontWeight = () => {
  const weight = [
    {id: 1, weight: "Bold", value: 'bold'},
    {id: 2, weight: "Italic", value: 'italic'},
    {id: 3, weight: "UnderLine", value: 'underline'},
  ]
  const [openDropDown, setOpenDropDown] = useState(false);
  const [fontWeight, setFontWeight] = useState('Font Weight')

  const toggleDropDown = (id:any) => {
    setOpenDropDown(!openDropDown)
    if(id) {
      setFontWeight(weight[id-1].weight)
      document.execCommand(weight[id-1].value,false, 'fuck')
    }

  }

  const hideDropDown = () => {
    setOpenDropDown(false)
  }

  return(
      <OutSideClick closedFunc={hideDropDown}>
        <div className="font-weight">
          <div onClick={()=>toggleDropDown(null)}>
            <input
                type="text"
                className="font-weight-select"
                readOnly={true}
                value={fontWeight}/>
          </div>

          <div className={`dropdown ${!openDropDown ? 'd-none' : ''}`}>
            <ul>
              {
                weight.map(item => {
                  return(
                      <li
                          key={item.id}
                          onClick={()=>toggleDropDown(item.id)}
                      >{item.weight}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </OutSideClick>
  )
}

export default FontWeight
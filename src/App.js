import React, { useEffect, useState } from 'react'
import './App.css'
import { FaWindowClose } from "react-icons/fa";
const App = () => {
   
  const [data, setData] = useState([
    {
      key : '',
      value : ''
    }
  ])
   
 
  
  return (
    <div>
      <nav className='nav'>
      {
        data.map((item, index) => (
          <span>
            <input type="text" value={item.key} onChange={((e) => {
              setData(items => items.map((item, i) => {
                if (index === i) {
                  item.key = e.target.value
                }
                return item
              }))
            })}/>
            <input type="text"  value={item.value}   onChange={((e) => {
              setData(items => items.map((item, i) => {
                if (index === i) {
                  item.value = e.target.value
                }
                return item
              }))
            })}/>
          {
            data.length > 1 ? (
              <h4 onClick={(() => {
                setData(items => items.filter((e, key) => key !== index)) 
               })}>
               <FaWindowClose className='close_icon' />
               </h4>
            ) :
            null
          }
          </span>
        ))
       }
       <h3 onClick={() => setData((e) => [...e, {
         key : '',
         value : ''
       }])}>
        SUBMİT
       </h3>
      </nav>
    </div>
  )
}

export default App

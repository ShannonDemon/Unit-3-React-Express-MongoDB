import React from 'react'
import { useState } from 'react'
import Battery from '../Battery/Battery'

function BatteryHookContainer() {

//   const arr = useState(0.55)
//   const level = arr[0]
//   const setLevel = arr[1]

  const[batteryData, setBatteryData] = useState({
    level: 0.25,
    charging: true
  })   

  const [level,setLevel]=useState(0.55)  
  const chargeBattery = ()=>{
    setLevel(level+0.01)
  }
//   console.log("Return from useState",useState(0.55) )  
  return (
    <>
    <div>
        <Battery level = {level}
         charging />
        <button onClick={chargeBattery}>Charge Battery!</button>
    </div>
    </>
  )
}

export default BatteryHookContainer
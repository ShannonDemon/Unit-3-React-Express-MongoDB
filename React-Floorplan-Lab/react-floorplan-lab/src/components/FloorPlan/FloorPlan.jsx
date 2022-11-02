import React from 'react'

import Kitchen from '../Kitchen/Kitchen';
import LivingRoom from '../LivingRoom/LivingRoom'
import BedRoom from '../BedRoom/BedRoom'
import Bath from '../Bath/Bath';
import {useState} from "react" 

function FloorPlan() {
    // let [state,setState] = useState({
    //     bedNumb: [1,2,3]
    // })
    return (
        <div className="floor-plan">
            <BedRoom bedNumb = {1}/>
            <Kitchen />
            <Bath size={"Full"}/>
            <BedRoom bedNumb = {2}/>
            <LivingRoom />
            <Bath size={"Half"}/>
            <BedRoom bedNumb = {3}/>
        </div>
    );
  }
  
  export default FloorPlan;

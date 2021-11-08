import SelectDay from "./SelectDay";

import Graphic from "./Graphic";

import {useEffect,useState} from "react";

import {platformInfo} from "./service.js"


function BassketPlatform() {
    const [infoForPlatform,setInfoForPlatform]=useState()

    useEffect(()=>{
        const date = new Date()
        const day =  date.getUTCDate();
        const info =  platformInfo(day)
        console.log("1",info);
        setInfoForPlatform(info)
    },[]);

    function selectingDay(e){
        console.log(e);
    }

    return (
       <div style={{border:"solid",borderRadius: "30px", padding:"20px"}} >
        {infoForPlatform && <div>
            <div>{infoForPlatform.day}</div>
            <div>{infoForPlatform.today} $ </div>
            <div>{infoForPlatform.price} $ </div>
        </div>}
        <Graphic/>
        <SelectDay test={selectingDay}/>
      </div>
    );
  }
  
  export default BassketPlatform;
  
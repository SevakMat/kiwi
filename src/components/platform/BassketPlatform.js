import Graphic from "./Graphic";
import PlatformInfo from "./PlatformInfo";
import ChangePlatformInfo from "./changePlatformInfo";

import {useEffect,useState} from "react";

import {platformInfo} from "../../service.js";

import "./platform.css";

function BassketPlatform() {
    const [infoForPlatform,setInfoForPlatform]=useState();

    useEffect(()=>{
        const date = new Date();
        const day =  date.getUTCDate();
        platformInfo(day).then((data)=>{setInfoForPlatform(data)})
    },[]);


    return (
       <div className="bassketPlatform">
        {infoForPlatform &&
          <PlatformInfo infoForPlatform={infoForPlatform}/>
        }
        <Graphic/>
        <ChangePlatformInfo/>
      </div>
    );
  }
  
  export default BassketPlatform;
  
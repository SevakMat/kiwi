import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import {getGraphicData} from "../../service.js"
import SelectDay from"./SelectDay"

import "./platform.css"

function Graphic() {
  const [data, setGraphData ]  = useState([])

  useEffect(()=>{
    const date = new Date();
    const day =  date.getUTCDate();
    setGraphData(getGraphicData(day))
  },[])

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 1,
      shape: 'diamond',
    },
  };  

  function selectingDay(day){
    setGraphData(getGraphicData(day))
  }

  return (
    <div className="daysSlide" >
      <Line {...config} />
      <SelectDay test={selectingDay}/>
    </div>
    );
  }

  export default Graphic;
  
import {dayAndGraph,attachmentBass,grafData} from "./db/db"

export function platformInfo(day){
    return new Promise((res,rej)=>{
        if(day < 10) day= "0" + day;
        const found = dayAndGraph.find(element => element.day == day);
        res(found)
    }).then((data)=>{return data})

   
}

export function getAttachmentList(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(attachmentBass)
        },4000)
        
    }).then((data)=>{return data})
}

export function getGraphicData(day){

    return new Promise((res,rej)=>{
        let graphInfo ="" 
        grafData.forEach((item)=>{
            if(item.day == day){
                graphInfo = item.data
            }
        })
        res(graphInfo)
    }).then((data)=>{return data})
}

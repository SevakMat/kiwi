import {dayAndGraph,attachmentBass,grafData} from "./db/db"

export function platformInfo(day){
    if(day < 10) day= "0" + day;
    const found = dayAndGraph.find(element => element.day === day);
    return found
}

export function getAttachmentList(){
    return attachmentBass
}

export function getGraphicData(day){

    let graphInfo ="" 
    grafData.forEach((item)=>{
        if(item.day == day){
            console.log(111,item.data);
            graphInfo = item.data
        }
    })

    return graphInfo
}

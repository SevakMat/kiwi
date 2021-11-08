import {dayAndGraph,attachmentBass} from "./db/db"

export function platformInfo(day){
    if(day.toString().length == 1){day="0"+day}
    const found = dayAndGraph.find(element => element.day === day);
    return found
}

export function getAttachmentList(){
    return attachmentBass
}

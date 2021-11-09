import {useEffect,useState} from "react";
import {getAttachmentList} from "../../service";

import RenderAttachmentItem from "./RenderAttachmentItem";

import "./attachment.css";

function BassketAttachment() {
    const [attachmentList,setAttachmentList] = useState([]);

    useEffect(()=>{
        const list = getAttachmentList()
        setAttachmentList(list)
    },[])

    return (
    <div className="attachmentItemsBlack" >
        {attachmentList.map((item,index)=>{
           return <RenderAttachmentItem key={index} item={item} />
        })}
    </div>
    );
  }
  
  export default BassketAttachment;
  
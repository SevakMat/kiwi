import {useEffect,useState} from "react";
import {getAttachmentList} from "../../service";

import RenderAttachmentItem from "./RenderAttachmentItem";
import LoadingIcon from "../../components/publicComponents/loadingIcon"

import "./attachment.css";

function BassketAttachment() {
    const [attachmentList,setAttachmentList] = useState([]);
    const [isloading,setIsLoading] = useState(true);

    useEffect(()=>{
        const list = getAttachmentList()
        list.then((data)=>{
            setAttachmentList(data)
            setIsLoading(false)
        })
    },[])

    return (
        <div>
            {
                isloading ?
                <LoadingIcon/>
                :
                <div className="attachmentItemsBlack" >
                {attachmentList.map((item,index)=>{
                return <RenderAttachmentItem key={index} item={item} />
                })}
            </div>
            }
        </div>

    );
  }
  
  export default BassketAttachment;
  
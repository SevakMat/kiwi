import {useEffect,useState} from "react"
import {getAttachmentList} from "./service.js"

function BassketAttachment() {
    const [attachmentList,setAttachmentList] = useState([])

    useEffect(()=>{
        const list = getAttachmentList()
        setAttachmentList(list)
    },[])

    function renderAttachmentItem(item,index){
        return(
            <div key={index} style={{border:"solid",borderRadius: "30px", padding:"20px"}}>
                <div>{item.name}</div>
                <div>{item.status}</div>
                <div>{item.number}</div>
                <div>{item.price}</div>
            </div>
        )
    }

    return (
    <div style={{display:"grid"}}>
        {attachmentList.map((item,index)=>{
           return renderAttachmentItem(item,index)
        })}
    </div>
    );
  }
  
  export default BassketAttachment;
  
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
            <div key={index} style={{border:"solid", textAlign: "center",borderRadius: "30px", padding:"0px 20px" ,width:"150px",margin:2}}>
                <div >{item.name}</div>
                <div>{item.status}</div>
                <div>{item.number}</div>
                <div>{item.price}</div>
                <button>potkluchit</button>
            </div>
        )
    }

    return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {attachmentList.map((item,index)=>{
           return renderAttachmentItem(item,index)
        })}
    </div>
    );
  }
  
  export default BassketAttachment;
  
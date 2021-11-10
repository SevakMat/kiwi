import Button from "../publicComponents/Button.js"

import "./attachment.css";

const RenderAttachmentItem = ({item}) => {
    return(
        <div className="attachmentItem" >
            <div className="btn btn-primary">{item.name}</div>
            <div>{item.status} 
            <img src={item.logoLink} style={{width:"20px", height:"20px"}}/>
            </div>
            <h3>{item.number}</h3>
            <div>{item.price}</div>
            <Button className={"btn btn-primary"} text ={"пополнить"} />
        </div>
    )
}

export default RenderAttachmentItem;
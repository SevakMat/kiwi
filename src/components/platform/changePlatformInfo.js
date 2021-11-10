import Button  from "../publicComponents/Button.js";

import "./platform.css";

function ChangePlatformInfo (){
    return(
        <div className="changePlatform" >
            <Button className={"btn btn-primary"} text={"+ пополнить"} />
            <Button className={"btn btn-primary"} text={" вывести"} />
        </div>
    )
};

export default ChangePlatformInfo;
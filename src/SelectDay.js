import "./style.css"

function SelectDay({test}){

    let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    function rendDays(){
       return days.map((item,index)=>{
            return(
                <div style={{margin:1}} onClick={()=>{ test()}} key={index} >{item +" " }</div>
            )
        })
    }

    return(
        <div className="parent">
            <div className="child">
                {rendDays()}
            </div>
        </div>
    )
}

export default SelectDay;
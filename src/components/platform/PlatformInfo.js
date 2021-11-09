function PlatformInfo({infoForPlatform}){
    return(
         <div>
            <div>{infoForPlatform.day}</div>
            <h3>{infoForPlatform.price} $ </h3>
            <div>{"севодня "+infoForPlatform.today} $ </div>
        </div>
    )
}

export default PlatformInfo;
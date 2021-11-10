import Carousel from 'react-elastic-carousel';

import "./platform.css";

function RendDays({days,test}) {

    return (
      <Carousel
        onChange={(currentItem,pageIndex) => test(pageIndex+1)}
      >
        {days.map((item,i) => {
            return(
                <div 
                    key={i}
                    className="slideItem"
                >
                    {item}
                </div>
            )
        })}
      </Carousel>
    )
}

export default RendDays;
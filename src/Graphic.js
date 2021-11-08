import React from 'react';
import { Line } from '@ant-design/charts';



function Graphic() {
    const data = [
        { year: '1987', value: 3 },
        { year: '1988', value: 4 },
        { year: '1989', value: 3.5 },
        { year: '1990', value: 5 },
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
    
      const config = {
        data,
        height: 400,
        xField: 'year',
        yField: 'value',
        point: {
          size: 1,
          shape: 'diamond',
        },
      };

    return (
      <div style={{width: "400px",height:"400px"}} >
        <Line {...config} />
      </div>
    );
  }
  



  export default Graphic;
  
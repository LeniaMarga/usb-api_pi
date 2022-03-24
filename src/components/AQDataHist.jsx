import React from 'react';

const AQData = (props) => {

    const roomAQDataHist = props.roomshist.map((room, index) => {
      
        return <div>
                 <p key={index}>{room[0].slice(0, 10)}{' | '}{room[0].slice(11)}{' : '}{room[1].map((m, i) => { return (<div key={i}>{m.value}</div>) })}</p>
               </div>
    })


    return (
        <div>
            <ul> 
                {roomAQDataHist}
            </ul>
        </div>

    )

}

export default AQData;
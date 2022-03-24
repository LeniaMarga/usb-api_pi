import React from 'react';

const AQData = (props) => {

    const roomAQData = props.rooms.map((room, index) => {
      
        return <div>
              <p key={index}>{room[0].slice(0, 10)}{' | '}{room[0].slice(11)}{' : '}{room[1].value}{' | change: '}{props.handleValueChange[index]}</p>
            </div>
        
    })


    return (
        <div>
            <ul> 
                {roomAQData}
            </ul>
        </div>

    )

}

export default AQData;
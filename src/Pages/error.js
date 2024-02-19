import React from 'react'
import No_Data from '../Assests/No_Data.jpg';
const error = () => {
  return (
    <div>
      <center style={{backgroundColor:'#0E101C'}} id="Discover">
          <img src={No_Data} alt="No data" className="No-data-img" />
         </center>
    </div>
  )
}

export default error

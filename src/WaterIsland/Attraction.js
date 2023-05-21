import React from 'react'
import './WaterIsland.css';
import AttrComp from './AttrComp';


const Attraction = () =>  {
  
  return (
    <div className="flexcontainer">
      <div className="Attraction">
        <div>
          <button className="attractionBtn">어트랙션</button>
        </div>

        <AttrComp />
      </div>
    </div>
  )
}

export default Attraction
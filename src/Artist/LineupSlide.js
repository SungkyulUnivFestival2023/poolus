import React from 'react';
import Reday30 from './Reday30';
import Reday31 from './Reday31';
import Day30 from './Day30';
import Day31 from './Day31';
import '../background.css';
import { useState } from 'react';
import './Artist.css';

function LineupSlide() {
  const [artistday, setArtistday ] = useState("day1");

  const handleartist = (day) => {
    setArtistday(day);
  }

  return (
    <section className="display-container bgwaterImg">
        <div className="LineupSlide good">
            <div className="dayscroll">
                <div className="dayparent">
                  <div className={`dayss ${artistday==="day1" ? 'activeday' : ''}`} onClick={()=>{handleartist("day1")}}>DAY1</div>
                  <div className={`dayss ${artistday==="day2" ? 'activeday' : ''}`} onClick={()=>{handleartist("day2")}}>DAY2</div>
                </div>

                <div className="lineupview">
                {/* {artistday === "day1" ? <Reday30 /> : <Reday31 />} */}
                {artistday === "day1" ? <Day30 /> : <Day31 />}
                </div>
            </div>
        </div>
    </section>
  )
}

export default LineupSlide
import React, { useEffect } from 'react'
import Day30 from './Day30'
import Day31 from './Day31'
import '../background.css';

function LineupSlide() {
        
  return (
    <section className="bgwaterImg">
        <div className="LineupSlide good">
            <div className="dayscroll">
                <img className="fixlogo" src="img/artist/lineup.png" alt="minilogo" />

                <div className="dayssss">
                  <img className="DayN" src={`img/artist/day1.png`} alt="day" />   
                  <div><Day30 /></div>
                </div>

                <div className="dayssss">
                  <img className="DayN" src={`img/artist/day2.png`} alt="day" />
                  <div><Day31 /></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LineupSlide
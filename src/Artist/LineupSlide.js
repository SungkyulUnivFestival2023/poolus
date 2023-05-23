import React, { useEffect } from 'react'
import Day30 from './Day30'
import Day31 from './Day31'
import mapBackground from '../mapbackground.png';

function LineupSlide() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${mapBackground})`; 
        }, []);
        
  return (
    <section className="flexcontainer">
        <div className="LineupSlide">
            <div className="dayscroll">
                <img className="fixlogo" src="img/artist/lineup.png" alt="minilogo" />
                {/* 나뭇잎배경 */}
                <img className="fixtree1" src="img/artist/tree2.png" alt="나뭇잎" />
                <img className="fixtree2"  src="img/artist/tree3.png" alt="나뭇잎" />

                <img src={`img/artist/day1.png`} alt="day" />   
                <div><Day30 /></div>
            </div>

            <div className="dayscroll">
                <img className="fixlogo" src="img/artist/lineup.png" alt="minilogo" />
                {/* 나뭇잎배경 */}
                <img className="fixtree1" src="img/artist/tree2.png" alt="나뭇잎" />
                <img className="fixtree2"  src="img/artist/tree3.png" alt="나뭇잎" />

                <img src={`img/artist/day2.png`} alt="day" />
                <div><Day31 /></div>
            </div>
        </div>
    </section>
  )
}

export default LineupSlide
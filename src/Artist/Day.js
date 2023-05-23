import React, { useEffect, useState } from 'react';
import './Artist.css'; 
import mapBackground from '../mapbackground.png';
import { useLocation } from 'react-router-dom';
import Day31 from './Day31';
import Day30 from './Day30';
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"

function Day() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${mapBackground})`; 
    }, []);

    const location = useLocation(); // 경로 정보를 가져옴
    const searchParams = new URLSearchParams(location.search); //파싱
    const day = searchParams.get('value') === "day1";

    const [chday, setChday] = useState(day);

    const handleChangeDay = (newday) => {
      setChday(newday);
    }

  return (
    <section className="flexcontainer">
      <img className="fixtree1" src="img/artist/tree2.png" alt="나뭇잎" />
      <img className="fixtree2"  src="img/artist/tree3.png" alt="나뭇잎" />

      
      <div className="Day">
        <div className="daytitle">
        
          {/* true일 때 day1 , false일 때 day2 */}
          {chday ? 
            <div className="dayArtist">
              <img src={`img/artist/day1.png`} alt="day" />
              <button onClick={()=>{handleChangeDay(!day)}}>
                <FaAngleDoubleRight size="30" color="black" className="dayarrow" /> 
              </button>
            </div>
             :
             <div className="dayArtist">
              <button onClick={()=>{handleChangeDay(day)}}>
                <FaAngleDoubleLeft size="30" color="black" />
              </button>
              <img src={`img/artist/day2.png`} alt="day" />
            </div>
          }


        </div>
       
        {chday ? <Day30 /> : <Day31 /> }
      </div>
    </section>
  )
}

export default Day
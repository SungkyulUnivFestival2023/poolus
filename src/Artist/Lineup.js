import React, { useEffect } from 'react'
import mapBackground from '../mapbackground.png';
import { Link } from 'react-router-dom';

function Lineup() { 
    useEffect(() => {
      document.body.style.backgroundImage = `url(${mapBackground})`; 
      }, []);

  return (
    <section className="flexcontainer">
        <div className="Lineup">
          <div className="dayBtns">
            {/* 버튼 누르면 value 값을 가지고 경로이동 */}
            <Link to={`/Day?value=${"day1"}`}>
              <button>Day1</button>
            </Link>
            <Link to={`/Day?value=${"day2"}`}>
              <button>Day2</button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Lineup
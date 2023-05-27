import React, { useRef } from 'react';
import Reday30 from './Reday30';
import Reday31 from './Reday31';
import '../background.css';
import { useState } from 'react';
import './Artist.css';
import Nav from '../Nav';

function LineupSlide() {
  const [artistday, setArtistday ] = useState("day1");

  const handleartist = (day) => {
    setArtistday(day);
  }

  const Xclickdom = useRef(null);
    const [Xclick, setXclick] = useState(true);

    const handleX= () => {
        setXclick(!Xclick);
        console.log(Xclickdom.current, Xclick);
    }

    const zindex = Xclick ? '' : 'zindex';

  return (
    <>

    <section className="display-container bgwaterImg">
        <Nav handleX={handleX} ref={Xclickdom} imgurl={"blacklogo"} />
        <div className="waterimg diao fixed-top d-flex justify-content-center"><img src="img/waterdiao.png" alt="?" /></div>

        <div className={`${zindex} dayparent navmargin navbar fixed-top d-flex justify-content-center`}>
          <div className={`dayss ${artistday==="day1" ? 'activeartist' : ''}`} onClick={()=>{handleartist("day1")}}>DAY1</div>
          <div className={`dayss ${artistday==="day2" ? 'activeartist' : ''}`} onClick={()=>{handleartist("day2")}}>DAY2</div>
        </div>

        <div className="LineupSlide good">
          <div className="lineupview">
          {artistday === "day1" ? <Reday30 /> : <Reday31 />}
          </div>
        </div>
    </section>
    </>
  )
}

export default LineupSlide
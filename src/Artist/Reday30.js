import React, { useEffect } from 'react'
import './Artist.css';

function Reday30() {
    useEffect(() => {
        window.scrollTo(0, 0); // 상단으로 스크롤
        }, []);
        
  return (
    <div>
        <div className="artist">
            <img src="img/artist/subin.png" alt="" />
            <img src="img/artist/subinT.png" alt="" />
            <img src="img/time/subintime.png" alt="" />
        </div>

        <div className="artist2">
            <img src="img/artist/jina.png" alt="" />
            <img src="img/artist/jinaT.png" alt="" />
            <img src="img/time/jinatime.png" alt="" />
        </div>

        <div className="artist">
            <img src="img/artist/locy.png" alt="" />
            <img src="img/artist/locyT.png" alt="" />
            <img src="img/time/lucytime.png" alt="" />
        </div>

        <div className="artist2">
            <img src="img/artist/bolsa.png" alt="" />
            <img src="img/artist/bolsaT.png" alt="" />
            <img src="img/time/bolsatime.png" alt="" className="bottomtime"/>
        </div>
    </div>
  )
}

export default Reday30

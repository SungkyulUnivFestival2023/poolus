import React, { useEffect } from 'react'

function Reday31() {
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, []);
  
  return (
    <div>
        <div className="artist">
          <img src="img/artist/unjjana.png" alt="언짜나이짜나" />
          <img src="img/artist/EZUZT.png" alt="EZUZ" />
          <img src="img/time/lucytime.png" alt="EZUZ" />
        </div>

        <div className="artist2">
          <img src="img/artist/by.png" alt="비와이" />
          <img src="img/artist/byT.png" alt="비와이" />
          <img src="img/time/bytime.png" alt="비와이" />
        </div>

        <div className="artist">
          <img src="img/artist/10cm.png" alt="10cm" />
          <img src="img/artist/10cmT.png" alt="10cm" />
          <img src="img/time/10cmtime.png" alt="10cm" />
        </div>
    </div>
  )
}

export default Reday31
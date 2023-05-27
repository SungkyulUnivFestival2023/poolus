import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function GardenMain({onChange, searchword}) {
  const [imgsize, setImgsize] = useState(false);
  
  const handleImg = () => {
    setImgsize(!imgsize);
  };

  return (
    <>
      <section className="boothmain">
        
          <div className="fixbackground"><img src="img/garden/gardenback.png" alt="garden 배경" /></div>
          {/* <div className="gardenlogo"><img src="img/logo/gardenlogo.png" alt="" /></div> */}
          <div className='garden-island-title navmargin'>
            <p className='island-title text-center isamanroo-font'>GARDEN ISLAND</p>
            <p className='poolus-title text-center anton-font'>POOL:US</p>
          </div>

          <p className="gardenLocation">
            <span><IoLocationSharp />성결관 앞 가든 아일랜드</span><br />
          </p>

          <p className="mapinfo">
            <MdKeyboardDoubleArrowDown size="20" /> 부스 지도를 클릭하시면 크게 볼 수 있어요 <MdKeyboardDoubleArrowDown size="20" />
            </p>

          <div className="gardenbooth">
            {imgsize ? 
            (<img src="img/garden/crop2.png" alt="전체부스" onClick={handleImg} />) :
            (<img src="img/garden/Gbooth.png" alt="전체부스" onClick={handleImg} />) }
          </div>
          
          <p className="searchtext">원하는 부스 또는 음식을 검색해 보세요!</p>

          <div className="search">
            <form className="searchform">
                <BiSearchAlt className="searchIcon" size="20" />
                <input className="searchInput" type="text" onChange={onChange} value={searchword}/>
            </form>
          </div>
      </section>
    </>
  )
}

export default GardenMain
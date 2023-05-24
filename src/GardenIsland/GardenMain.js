import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

function GardenMain({onChange, searchword}) {
  
  return (
    <section className="boothmain">
        <div className="gardenlogo"><img src="img/garden/gardenlogo.png" alt="" /></div>

        <p className="searchtext">원하는 부스 또는 음식을 검색해 보세요!</p>

        <div className="search">
        <form>
            <BiSearchAlt className="searchIcon" size="20" />
            <input className="searchInput" type="text" onChange={onChange} value={searchword}/>
        </form>
        </div>

        <div className="gardenbooth"><img src="img/garden/boothmap.png" alt="전체부스" /></div>
        <p className="gardenLocation"><IoLocationSharp />성결관 앞 가든 아일랜드</p>
        <div className="fixbackground"><img src="img/garden/gardenback.png" alt="garden 배경" /></div>
    </section>
  )
}

export default GardenMain
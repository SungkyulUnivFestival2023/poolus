import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

function GardenMain({onChange, value}) {
  return (
    <section className="boothmain">
        <div className="gardenlogo"><img src="img/garden/gardenlogo.png" alt="" /></div>

        <p className="searchtext">원하는 부스 또는 <br/>음식을 검색해 보세요!</p>

        <div className="search">
        <form>
            <input className="searchInput" type="text" onChange={onChange} value={value}/>
            <input className="searchSubmit" type="submit" value="" />
            <BiSearchAlt className="searchIcon"size="20" />
        </form>
        </div>

        <div className="gardenbooth"><img src="img/garden/boothmap.png" alt="전체부스" /></div>
        <div className="fixbackground"><img src="img/garden/gardenback.png" alt="garden 배경" /></div>
    </section>
  )
}

export default GardenMain
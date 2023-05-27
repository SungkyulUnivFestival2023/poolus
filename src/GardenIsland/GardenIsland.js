import React, { useEffect, useState } from 'react'
import './GardenIsland.css';
import GardenMain from './GardenMain';
import Allbooth from './Allbooth';
import '../background.css';
import Nav from '../Nav';


function GardenIsland() {
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, []);
  
  const [searchword, setSearchword] = useState('');

  // 검색하면 searchword 바뀌도록
  const handleSearch = (event) => {
    setSearchword(event.target.value);
  }

  return (
    <>
    <Nav btncolor={"#287e3a"} classcolor={"greencolor"} />
    <section className="display-container fullbgBag">
        <div className="GardenIsland good">
          {/* 부스 메인 */}
          <GardenMain onChange={handleSearch} />

          {/* 부스 리스트 렌더링 */}
          <Allbooth searchword={searchword} />
        </div>
    </section>
    </>
  )
}

export default GardenIsland
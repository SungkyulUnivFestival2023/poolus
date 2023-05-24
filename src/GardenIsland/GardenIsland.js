import React, { useEffect, useState } from 'react'
import './GardenIsland.css';
import GardenMain from './GardenMain';
import Allbooth from './Allbooth';
import '../background.css';

function GardenIsland() {

    const [searchword, setSearchword] = useState('');

    // 검색하면 searchword 바뀌도록
    const handleSearch = (event) => {
      setSearchword(event.target.value);
    }

  return (
    <section className="fullbgBag">
        <div className="GardenIsland good">
          {/* 부스 메인 */}
          <GardenMain onChange={handleSearch} />

          {/* 부스 리스트 렌더링 */}
          <Allbooth searchword={searchword} />
        </div>
    </section>
  )
}

export default GardenIsland
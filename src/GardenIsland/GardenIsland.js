import React, { useEffect, useState } from 'react'
import './GardenIsland.css';
import GardenMain from './GardenMain';
import Allbooth from './Allbooth';

function GardenIsland() {
    useEffect(() => {
        const newColor = '#FEF5E8'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

    const [searchword, setSearchword] = useState('');

    // 검색하면 searchword 바뀌도록
    const handleSearch = (event) => {
      setSearchword(event.target.value);
      console.log("state변경", searchword);
    }

  return (
    <section className="flexcontainer">
        <div className="GardenIsland">
          {/* 부스 메인 */}
          <GardenMain onChange={handleSearch} />

          {/* 부스 전체 리스트 렌더링 */}
          <Allbooth searchword={searchword} />
        </div>
    </section>
  )
}

export default GardenIsland
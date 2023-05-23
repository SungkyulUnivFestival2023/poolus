import React, { useEffect, useState } from 'react'
import './GardenIsland.css';
import MenuData from'./MenuData.json';
import GardenMain from './GardenMain';
import { BsStar } from "react-icons/bs";
import Allbooth from './Allbooth';

function GardenIsland() {
    useEffect(() => {
        const newColor = '#FEF5E8'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

    const [searchword, setSearchword] = useState('');

    const handleSearch = (event) => {
      setSearchword(event.target.value0);
      console.log(searchword);
    }
    
  return (
    <section className="flexcontainer">
        <div className="GardenIsland">
          {/* 부스 메인 */}
          <GardenMain onChange={handleSearch} value={searchword} />

          {/* 부스 전체 리스트 렌더링 */}
          <Allbooth />

          {/* 검색 후 리스트 렌더링 */}
        </div>
    </section>
  )
}

export default GardenIsland
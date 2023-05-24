import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    const newColor = 'black'; // 변경할 배경색을 지정
    document.body.style.backgroundColor = newColor; // body의 배경색 변경
  }, []);
  
  return (
    <div ClassName="flexcontainer">
      
      <Link to="/TimeTable">타임테이블</Link>
      <br/>
      <Link to="/WaterIsland">워터아일랜드</Link>
      <br/>
      <Link to="/Mainmap">메인 맵</Link>
      <br/>
      <Link to="/GardenIsland">가든아일랜드</Link>
      <br/>
      <Link to="/ArtistTitle">아티스트</Link>
      <br/>
    </div>
  )
}

export default Home
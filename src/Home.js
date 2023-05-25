import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  
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
      <Link to="/InfoMain">공지사항</Link>
      <br/>
      <Link to="/About">About</Link>
    </div>
  )
}

export default Home
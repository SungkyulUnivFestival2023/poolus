import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    const newColor = 'black'; // 변경할 배경색을 지정
    document.body.style.backgroundColor = newColor; // body의 배경색 변경
  }, []);
  
  return (
    <div ClassName="flexcontainer">
      <Link to="/TimeTable"></Link>
      <Link to="/WaterIsland"></Link>
      <Link to="/Mainmap"></Link>
      <Link to="/GardenIsland"></Link>
      <Link to="/ArtistTitle"></Link>
    </div>
  )
}

export default Home
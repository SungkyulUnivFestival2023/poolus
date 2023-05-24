import React, { useEffect } from 'react'
import './Home.css';
import './App.css';
import Nav from './Nav';

function Home() {
  useEffect(() => {
    const newColor = '#121212'; // 변경할 배경색을 지정
    document.body.style.backgroundColor = newColor; // body의 배경색 변경
  }, []);
  
  return (
    <div>
      <div className='display-container'>
      <Nav/>
        <div className='main d-flex justify-content-center align-items-center'>
          <video autoPlay loop muted playsInline>
            <source src={`video/background-video.mp4`} type='video/mp4' />
          </video>
          <div>
            <div className="glitch anton-font" data-glitch="POOL:US">POOL:US</div>
            <div className="text-white my-3 text-center sub-title isamanroo-font">2023 영암축전<br /> 2023.05.30 - 2023.05.31</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
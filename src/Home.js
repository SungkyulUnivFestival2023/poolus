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
        {/* Main Section */}
        <div className='main d-flex justify-content-center align-items-center'>
          <video autoPlay loop muted playsInline>
            <source src={`video/background-video.mp4`} type='video/mp4' />
          </video>
          <div>
            <div className="glitch anton-font" data-glitch="POOL:US">POOL:US</div>
            <div className="text-white my-3 text-center sub-title isamanroo-font">2023 영암축전<br /> 2023.05.30 - 2023.05.31</div>
            <a href="#about-pool-us" class="btn-about-pool-us d-flex justify-content-center align-items-center">
                <div class="-font text-center py-2 about-pool-us-in">POOL:US 란?</div>
                <div class="isamanroo-font text-center py-2 about-pool-us-out"></div>
            </a>
          </div>
        </div>
        {/* Water Island */}
        <div className='waterisland-section'>
          <p className='island-title text-center isamanroo-font'>WATER ISLAND</p>
          <p className='poolus-title text-center anton-font'>POOL:US</p>
          <p className='section-description text-center sbaggro-font'>여름날의 청량한 쉼터, WATER ISLAND
          <br/>뜨거운 여름의 온기로 가득한 지금.
          <br/>
          <br/>청량한 바다의 향기를 머금은
          <br/>작은 쉼터가 여러분을 기다리고 있습니다.
          <br/>
          <br/>푸른 바다의 정취가 느껴지는
          <br/>
          <br />WATER ISLAND로 여러분을 초대합니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import './Home.css';
import './App.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='display-container'>
    <Nav/>
      {/* Main Section */}
      <div className='main d-flex justify-content-center align-items-center'>
        <video autoPlay loop muted playsInline>
          <source src={`video/background-video.mp4`} type='video/mp4' />
        </video>
        <div id='btn-main-group'>
          <div className="glitch anton-font" data-glitch="POOL:US">POOL:US</div>
          <div className="text-white my-3 text-center sub-title isamanroo-font">2023 영암축전<br /> 2023.05.30 - 2023.05.31</div>
          <a href="#waterIsland" class="btn-main d-flex justify-content-center align-items-center my-4">
              <div class="text-center py-2 btn-main-waterisland-in isamanroo-font">WATER ISLAND</div>
              <div class="isamanroo-font text-center py-2 btn-main-waterisland-out"></div>
          </a>
          <a href="#romanticIsland" class="btn-main d-flex justify-content-center align-items-center my-4">
              <div class="text-center py-2 btn-main-romanticisland-in isamanroo-font">ROMANTIC ISLAND</div>
              <div class="isamanroo-font text-center py-2 btn-main-romanticisland-out"></div>
          </a>
          <a href="#gardenIsland" class="btn-main d-flex justify-content-center align-items-center my-4">
              <div class="text-center py-2 btn-main-gardenisland-in isamanroo-font">GARDEN ISLAND</div>
              <div class="isamanroo-font text-center py-2 btn-main-gardenisland-out"></div>
          </a>
        </div>
        <div className='wayto-water-island text-center'>
          <p>WATER ISLAND<br/>구경하러 가기</p>
          <img src="img/arrow.png" alt="way to water island"/>
        </div>
      </div>
      {/* Water Island */}
      <div className='waterisland-section' id='waterIsland'>
        <div className='waterisland-title'>
          <p className='island-title text-center isamanroo-font'>WATER ISLAND</p>
          <p className='poolus-title text-center anton-font'>POOL:US</p>
          <img className='wave-line-1' src="img/wave-line.png" alt="타이틀 꾸미는 wave line"/>
          <img className='wave-line-2' src="img/wave-line.png" alt="타이틀 꾸미는 wave line"/>
        </div>
        <p className='section-description text-center sbaggro-font'>
          여름날의 청량한 쉼터, WATER ISLAND
          <br/>뜨거운 여름의 온기로 가득한 지금.
          <br/>
          <br/>청량한 바다의 향기를 머금은
          <br/>작은 쉼터가 여러분을 기다리고 있습니다.
          <br/>
          <br/>푸른 바다의 정취가 느껴지는
          <br/>
          <br />WATER ISLAND로 여러분을 초대합니다.
        </p>
        <div className="main-waterIslandBtn">
          <Link to="/WaterIsland">
              <button>자세히 보기</button>
          </Link>
        </div>
        <div className='waterisland-img'>
          <img className='img-fluid' src="img/wave-and-tree.png" alt="way to water island"/>
        </div>
        <div className='wayto-romantic-island text-center'>
          <p>ROMANTIC ISLAND<br/>구경하러 가기</p>
          <img src="img/black-arrow.png" alt="way to romantic island"/>
        </div>
      </div>
      {/* Romantic Island */}
      <div className='romanticisland-section' id='romanticIsland'>
        <div className='romanticisland-title text-center'>
          <p className='island-title text-center isamanroo-font'>ROMANTIC ISLAND</p>
          <p className='poolus-title text-center anton-font'>POOL:US</p>
          {/* iPhone se 사이즈에서 보면 스프링 이미지 때문에 section을 벗어나서 주석처리 */}
          {/* <img className='spring' src="img/spring.png" alt="로맨틱 아일랜드 spring"/> */}
          <img className='cloud-1' src="img/cloud-1.png" alt="타이틀 꾸미는 구름"/>
          <img className='cloud-2' src="img/cloud-2.png" alt="타이틀 꾸미는 구름"/>
          <img className='cloud-3' src="img/cloud-3.png" alt="타이틀 꾸미는 구름"/>
        </div>
        <div className='hashtag'>
          <div className='text-center'>
            <div>
              <span className='badge mx-1'>#연애</span>
              <span className='badge mx-1'>#사탕팅</span>
              <span className='badge mx-1'>#플리마켓</span>
            </div>
            <div>
              <span className='badge mx-1'>#인생네컷</span>
              <span className='badge mx-1'>#Who are you?</span>
            </div>
          </div>
        </div>
        <p className='section-description text-center sbaggro-font'>
          진정한 사랑이란? ROMANTIC ISLAND
          <br/>누군가를 사랑한다는 건 어떤 의미일까,
          <br/>진정한 사랑의 의미를 찾으러 가는 길.
          <br/>그 길의 끝엔 무엇이 기다리고 있을까?
          <br/>
          <br/>이제 그 길의 답을 찾으러 갈 시간
          <br/>
          <br />ROMANTIC ISLAND로 여러분을 초대합니다.
        </p>
        <div className='heart-group'>
          <img className='heart-1' src="img/heart-1.png" alt="heart 1"/>
          <img className='heart-2' src="img/heart-2.png" alt="heart 1"/>
          <img className='heart-3' src="img/heart-2.png" alt="heart 1"/>
        </div>
        <div className='romanticisland-img'>
          <img className='img-fluid' src="img/cloud-bottom.png" alt="로맨틱 아일랜드 하단 구름"/>
        </div>
        <div className='wayto-garden-island text-center'>
          <p>GARDEN ISLAND<br/>구경하러 가기</p>
          <img src="img/romantic-arrow.png" alt="way to Garden island"/>
        </div>
      </div>
      {/* Garden Island */}
      <div className='gardenisland-section' id='gardenIsland'>
        <div className='gardenisland-title text-center'>
          <p className='island-title text-center isamanroo-font'>GARDEN ISLAND</p>
          <p className='poolus-title text-center anton-font'>POOL:US</p>
          {/* iPhone se 사이즈에서 보면 스프링 이미지 때문에 section을 벗어나서 주석처리 */}
          {/* <img className='leaves' src="img/leaves.png" alt="가든 아일랜드 나뭇잎"/> */}
          <img className='garden-cloud-1' src="img/garden-cloud-1.png" alt="타이틀 꾸미는 구름"/>
          <img className='garden-cloud-2' src="img/garden-cloud-2.png" alt="타이틀 꾸미는 구름"/>
          <img className='garden-cloud-3' src="img/garden-cloud-3.png" alt="타이틀 꾸미는 구름"/>
          <img className='garden-cloud-4' src="img/garden-cloud-4.png" alt="타이틀 꾸미는 구름"/>
        </div>
        <p className='section-description text-center sbaggro-font'>
          숲속의 작은 쉼터, GARDEN ISLAND
          <br/>매일 걷던 그 길을 헤매이다, 우연히 도착한 숲.
          <br/>
          <br/>그곳엔 지친 당신을 위로해줄
          <br/>쉼터가 기다리고 있습니다.
          <br/>
          <br/>고된 하루의 끝을 위로하며,
          <br/>지친 그대를 보듬어줄 작은 쉼터.
          <br/>
          <br/>GARDEN ISLAND로 여러분을 초대합니다.
        </p>
        <div className="gardenIslandBtn">
          <Link to="/GardenIsland">
              <button>부스 보러가기</button>
          </Link>
        </div>
        <div className='gardenisland-img'>
          <img className='img-fluid' src="img/garden-island-bottom.png" alt="가든 아일랜드 하단 정원"/>
        </div>
      </div>
    </div>
  )
}

export default Home

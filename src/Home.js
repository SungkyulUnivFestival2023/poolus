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
        <video autoPlay loop muted playsInline>
          <source src={`video/pexels-rostislav-uzunov-5680034-1280x720-24fps.mp4`} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Home
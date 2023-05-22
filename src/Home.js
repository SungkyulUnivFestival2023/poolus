import React, { useEffect } from 'react'

function Home() {
  useEffect(() => {
    const newColor = 'black'; // 변경할 배경색을 지정
    document.body.style.backgroundColor = newColor; // body의 배경색 변경
  }, []);
  
  return (
    <div>
      <div>홈이용</div>
    </div>
  )
}

export default Home
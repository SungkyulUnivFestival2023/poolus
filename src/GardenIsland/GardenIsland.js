import React, { useEffect } from 'react'

function GardenIsland() {
    useEffect(() => {
        const newColor = '#FEF5E8'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

  return (
    <section className="">
        <div className="GardenIsland">
            
        </div>
    </section>
  )
}

export default GardenIsland
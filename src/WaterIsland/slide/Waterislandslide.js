import React, { useState } from 'react'
import './waterislandslide.css';
import Goods from './Goods';
import Attra from './Attra';

function Waterislandslide() {
const [content, setContent] = useState('어트랙션');

    const handlecontent = (content) => {
        setContent(content);
    }

    const activebtn1 = content === '어트랙션' ? 'activebtn' : '';
    const activebtn2 = content === '굿즈' ? 'activebtn' : '';

  return (
    <section className="display-container fullbgB">
        <div className="Goods good">
            <div className="waterbtnsparent">
                <div className="waterbtns">
                    <button onClick={()=>{handlecontent('어트랙션')}} className={`wslidebtn ${activebtn1}`}>어트랙션</button>
                    <button onClick={() => {handlecontent('굿즈')}} className={`wslidebtn ${activebtn2}`}>매표소</button> 
                </div>
            </div>

            {content === '어트랙션' ? <Attra /> : <Goods />}
       {/* <div>
          <Link to="/WaterIsland" className="attractionBtn">
            <IoIosArrowBack className="arrowback" size="20" color="black" />
            {contents === "attr" ? <span>어트랙션</span> : <span>매표소 (굿즈)</span>}
          </Link>
        </div>

        <div>
          <div className="waterIslandContents">
              {contents === "attr" ? <Carouselattraction /> : <Carouselgoods /> }
          </div> 
        </div>*/}
        </div>
    </section>
  )
}

export default Waterislandslide
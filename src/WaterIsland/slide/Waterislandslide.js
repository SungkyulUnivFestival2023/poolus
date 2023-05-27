import React, { useEffect, useRef, useState } from 'react'
import './waterislandslide.css';
import Goods from './Goods';
import Attra from './Attra';
import Nav from '../../Nav';

function Waterislandslide() {
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, []);

  const Xclickdom = useRef(null);
  const [Xclick, setXclick] = useState(true);

  const handleX= () => {
      setXclick(!Xclick);
      console.log(Xclickdom.current, Xclick);
  }

  const zindex = Xclick ? 'zindexx' : 'zindex';


  const [content, setContent] = useState('어트랙션');

    const handlecontent = (content) => {
        setContent(content);
    }

    const activebtn1 = content === '어트랙션' ? 'activebtn' : '';
    const activebtn2 = content === '굿즈' ? 'activebtn' : '';

  return (
    <>
    <Nav handleX={handleX} ref={Xclickdom} />
    <section className="display-container fullbgB">
        <div className="waterbtnsparent">
          <div className={`${zindex} navbar navmargin fixed-top d-flex justify-content-center`}>
              <button onClick={()=>{handlecontent('어트랙션')}} className={`wslidebtn ${activebtn1}`}>어트랙션</button>
              <button onClick={() => {handlecontent('굿즈')}} className={`wslidebtn ${activebtn2}`}>매표소</button> 
          </div>
        </div>

        <div className="Goods good">
            {content === '어트랙션' ? <Attra /> : <Goods />}
        </div>
    </section>
    </>
  )
}

export default Waterislandslide
import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Nfree from './Nfree';
import Yfree from './Yfree';
import { Link } from "react-router-dom";

const Goods = () =>  {
  const [goods, setGoods] = useState(true);
  const changeGoods = () => {
    setGoods(!goods);
  }

  return (
    <section className="flexcontainer vhHeight">
      <div className="Goods">
        <Link to="/WaterIsland" className="attractionBtn">
          <IoIosArrowBack className="arrowback" size="20" color="black" />
          <span>어트랙션</span>
        </Link>

        <div className="arrowflex">
          <button className="arrow" onClick={()=>changeGoods()} ><IoIosArrowBack size="30" color="#b7b7b7" /></button>

          <div>
            
            {goods ? <Yfree /> : <Nfree />}
            
          </div>
          <button className="arrow" onClick={()=>changeGoods()} ><IoIosArrowForward size="30" color="#b7b7b7" /></button>
          </div>    
      </div>
    </section>
  )
}

export default Goods
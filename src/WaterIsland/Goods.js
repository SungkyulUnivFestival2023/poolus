import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Nfree from './Nfree';
import Yfree from './Yfree';

const Goods = () =>  {
  const [goods, setGoods] = useState(true);
  const changeGoods = (bool) => {
    setGoods(bool);
  }

  return (
    <div className="flexcontainer vhHeight">
      <div className="Goods">
        <button className="attractionBtn">매표소 (굿즈)</button>

        <div className="arrowflex">
          <button className="arrow" onClick={()=>changeGoods(true)} ><IoIosArrowBack size="30" color="#b7b7b7" /></button>

          <div>
            {goods ? <Yfree /> : <Nfree /> }
          </div>
          <button className="arrow" onClick={()=>changeGoods(false)} ><IoIosArrowForward size="30" color="#b7b7b7" /></button>
          </div>    
      </div>
    </div>
  )
}

export default Goods
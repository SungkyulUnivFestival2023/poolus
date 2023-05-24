import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

function SearchBooth({filteredBooth, star, handleStar}) {

  return (
    <>
    {filteredBooth.map((item) => {
        return(
        <section className="gardenbooth" key={item.id}>
            <div className="flexbooth">
                <>
                <div className="listImg">
                <img src="img/garden/boothimg.png" alt="부스이미지" />
                </div>
                <div className="boothlist">
                    {/* 학과별 부스*/}
                    <p className="boothtitle">{item.department}</p>

                    {/* 메뉴 */}
                    <span className="boothmenu">
                    <>
                    {/* 메뉴가 너무 많은 부스들이 있어서 메뉴 3개만 보이도록 */}
                        {item.menus.slice(0, 3).map((items)=> (
                            <>
                            {items.name},<span>  </span> 
                            </>
                        ))} 등등
                    </>
                    </span>
                </div>

                <button className="starbtn" onClick={(event) => handleStar(event, item.id)} >
                    {item.star ? <AiTwotoneStar size="18" className="star"/> : <AiOutlineStar size="18" className="star"/>}
                </button>
            </>
            </div>
        </section>
        );
    })}
  </>
);
}


export default SearchBooth
import React from 'react';
import { BsStar } from "react-icons/bs";

function SearchBooth({filteredBooth}) {
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
                <BsStar className="star"/>
            </>
            </div>
        </section>
        );
    })}
  </>
);
}


export default SearchBooth
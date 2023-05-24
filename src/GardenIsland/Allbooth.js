import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import MenuData from'./MenuData.json';
import SearchBooth from './SearchBooth';
import { AiTwotoneStar } from "react-icons/ai";

function Allbooth({searchword}) {
    // 학과, 메뉴 검색 필터링
    const filteredBooth = MenuData.filter((booth) =>
        booth.department.includes(searchword) ||
        booth.menus.some((item) =>
            item.name.includes(searchword)
        ));

    const [star, setStar] = useState(false);

    // json Data에서 star의 상태를 추가하는 배열 새로 만듦.
    const updatedStarData = MenuData.map((booth) => {
          return {
            ...booth,
            star: false,
          };
      });

    const handleStar = (event, id) => {
        event.preventDefault();
        // if (updatedStarData.id === id) {
            console.log(updatedStarData);
        }
    //   };

  return (
    <>
    {filteredBooth.length > 0 || searchword !== '' ? (
        <SearchBooth filteredBooth={filteredBooth} handleStar={handleStar} star={star} />
    ) : (
        <>
            {MenuData.map((booth) => (
            <section className="gardenbooth" key={booth.id}>
                <div className="flexbooth">
                    <>                
                    <div className="listImg">
                    <img src="img/garden/boothimg.png" alt="부스이미지" />
                    </div>
                    <div className="boothlist">
                        {/* 학과별 부스*/}
                        <p className="boothtitle">{booth.department}</p>

                        {/* 메뉴 */}
                        <span className="boothmenu">
                        <>
                        {/* 메뉴가 너무 많은 부스들이 있어서 메뉴 3개만 보이도록 */}
                            {booth.menus.slice(0, ).map((items)=> (
                                <>
                                {items.name},<span>  </span> 
                                </>
                            ))} 등등
                        </>
                        </span>
                    </div>

                    <button className="starbtn" onClick={(event) => handleStar(event, booth.id)} >
                        {booth.star ? <AiTwotoneStar size="18" className="star"/> : <AiOutlineStar size="18" className="star"/>}
                    </button>
                </>
                </div>
            </section>
          ))}
          </>
        )}
      </>
    );
  }
  

export default Allbooth
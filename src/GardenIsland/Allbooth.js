import React from 'react';
import { BsStar } from "react-icons/bs";
import MenuData from'./MenuData.json';
import SearchBooth from './SearchBooth';

function Allbooth({searchword}) {
    // 학과, 메뉴 검색 필터링
    const filteredBooth = MenuData.filter((booth) =>
        booth.department.includes(searchword) ||
        booth.menus.some((item) =>
            item.name.includes(searchword)
        ));

  return (
    <>
    {filteredBooth.length > 0 ? (
        <SearchBooth filteredBooth={filteredBooth}/>
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
                            {booth.menus.slice(0, 3).map((items)=> (
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
          ))}
          </>
        )}
      </>
    );
  }
  

export default Allbooth
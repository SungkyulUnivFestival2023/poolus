import React, { useEffect } from 'react'
import './GardenIsland.css';
import { BiSearchAlt } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import MenuData from'./MenuData.json';

function GardenIsland() {
    useEffect(() => {
        const newColor = '#FEF5E8'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

  return (
    <section className="flexcontainer">
        <div className="GardenIsland">
          <section className="boothmain">
            <div className="gardenlogo"><img src="img/garden/gardenlogo.png" alt="" /></div>

              <p className="searchtext">원하는 부스 또는 <br/>음식을 검색해 보세요!</p>

              <div className="search">
                <div>
                  <input className="searchInput" type="text" />
                  <input className="searchSubmit" type="submit" value="" />
                  <BiSearchAlt className="searchIcon"size="20" />
                </div>
              </div>

              <div className="gardenbooth"><img src="img/garden/boothmap.png" alt="전체부스" /></div>
              <div className="fixbackground"><img src="img/garden/gardenback.png" alt="garden 배경" /></div>
          </section>

          {MenuData.map((booth)=> (
          <section className="gardenbooth">
            <div className="flexbooth">
                <>                
                <div className="listImg">
                  <img src="img/goggles.png" alt="부스이미지" />
                </div>
                <div className="boothlist">
                    {/* 학과별 부스*/}
                    <p className="boothtitle">{booth.department}</p>
                    {/* 학과별 부스*/}
                    <p className="boothmenu">차라리 메뉴 나열하는 게 나을듯</p>
                </div>
                <BsStar className="star"/>
              </>
            </div>
          </section>
          ))}

          
        </div>
    </section>
  )
}

export default GardenIsland
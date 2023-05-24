import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import MenuData from'./MenuData.json';
import SearchBooth from './SearchBooth';
import { AiTwotoneStar } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modalbooth from './Modalbooth';

function Allbooth({searchword}) {
    // 학과, 메뉴 검색 필터링
    const filteredBooth = MenuData.filter((booth) =>
        booth.department.includes(searchword) ||
        booth.menus.some((item) =>
            item.name.includes(searchword)
        ));

    // 즐겨찾기 
    const [star, setStar] = useState(false);

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

    // 부스 선택 모달창
    const [selectedBooth, setSelectedBooth] = useState(null);

    const openModal = (booth) => {
        setSelectedBooth(booth);
        console.log(booth);
      };

    const closeModal = () => {
    setSelectedBooth(null);
    };

  return (
    <>
    {filteredBooth.length > 0 || searchword !== '' ? (
        <SearchBooth 
            filteredBooth={filteredBooth} 
            handleStar={handleStar} 
            star={star} 
            selectedBooth={selectedBooth}
            openModal={openModal}
            closeModal={closeModal}
        />
    ) : (
        <>
            {MenuData.map((booth) => (
                <>
                 <Button key={booth.id} variant="" onClick={() => openModal(booth)}>
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
                </Button>
                <Modalbooth selectedBooth={selectedBooth} openModal={openModal} closeModal={closeModal} />
            </>
          ))}
          </>
        )}
      </>
    );
  }
  

export default Allbooth
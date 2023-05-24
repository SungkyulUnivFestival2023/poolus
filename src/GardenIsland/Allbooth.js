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
        {filteredBooth.length > 0 && searchword !== '' && (
        <SearchBooth 
            filteredBooth={filteredBooth} 
            handleStar={handleStar} 
            star={star} 
            selectedBooth={selectedBooth}
            openModal={openModal}
            closeModal={closeModal}
        />
        )}
        <Modalbooth searchword={searchword} selectedBooth={selectedBooth} openModal={openModal} closeModal={closeModal} />
    </>
    );
  }
  
export default Allbooth
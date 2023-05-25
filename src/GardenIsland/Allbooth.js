import React, { useState } from 'react';
import MenuData from'./MenuData.json';
import SearchBooth from './SearchBooth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modalbooth.css';
import { MdOutlineFoodBank } from "react-icons/md";

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
      };

    const closeModal = () => {
    setSelectedBooth(null);
    };

  return (
    <>
    {/* 검색창 입력되지 않았을 때, 전체 부스 렌더링 */}
    {searchword === '' && (
        MenuData.map((booth) => (
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
                            {booth.menus.slice(0, 3).map((items)=> (
                                <>
                                {items.name},<span>  </span> 
                                </>
                            ))} 등
                        </>
                        </span>
                    </div>
                </>
                </div>
            </section>
        </Button>
      )))}

      {/* 검색창 입력되었을 때 검색된 단어를 포함하는 부스만 렌더링 */}
      {filteredBooth.length > 0 && searchword !== '' && (
        <SearchBooth 
            searchword={searchword}
            filteredBooth={filteredBooth} 
            handleStar={handleStar} 
            star={star} 
            selectedBooth={selectedBooth}
            openModal={openModal}
            closeModal={closeModal}
        />
        )}
      
      {/* 클릭시 모달창 띄울 컴포넌트 */}
      {selectedBooth && (
        <Modal
          show={!!selectedBooth}
          onHide={closeModal}
          dialogClassName="modal-80w"
          aria-labelledby="example-custom-modal-styling-title"
          className="modalframe"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            <MdOutlineFoodBank size="28" /> {selectedBooth.department}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
                {selectedBooth.menus.map((item)=> (
                  <div>
                      <span className="menuname">{item.name}</span><br />
                      <span className="menuprice">{item.price}</span>
                      <hr />
                  </div>
                ))}
            </section>
          </Modal.Body>
        </Modal> 
    )}
    </>
    );
  }
  
export default Allbooth
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modalbooth.css';

function SearchBooth({filteredBooth, handleStar, selectedBooth, openModal, closeModal}) {

  return (
    <>
    {/* 앞에서 필터링된 배열을 가지고 렌더링함 */}
    {filteredBooth.map((item) => {
        return(
            <>
            <Button key={item.id} variant="" onClick={() => openModal(item)}>
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
                                    {items.name} <span>  </span> <br/>
                                    </>
                                ))}
                            </>
                            </span>
                        </div>
                    </>
                    </div>
                </section>
            </Button>
        </>
        );
    })}

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
              {selectedBooth.department}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
                {selectedBooth.menus.map((item)=> (
                    <div className="food">{item.name} - {item.price}</div>
                ))}
            </section>
          </Modal.Body>
        </Modal>
    )}
  </>
);
}


export default SearchBooth

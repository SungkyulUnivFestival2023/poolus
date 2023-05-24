import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MenuData from'./MenuData.json';
import './Modalbooth.css';

function Modalbooth({searchword}) {
    // 부스 선택
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
                            ))} 등등
                        </>
                        </span>
                    </div>
                </>
                </div>
            </section>
        </Button>
      )))}

    {/* selectedBooth에 부스 정보다 들어있으면 모달창 띄움 */}
    {selectedBooth && (
        <Modal
          show={!!selectedBooth}
          onHide={closeModal}
          dialogClassName="modal-80w"
          aria-labelledby="example-custom-modal-styling-title"
          classNamve="modalframe"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {selectedBooth.department}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
                {selectedBooth.menus.map((item)=> (
                    <div>{item.name} - {item.price}</div>
                ))}
            </section>
          </Modal.Body>
        </Modal>
    )}
    </>
  );
}

export default Modalbooth
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modalbooth.css';

function Modalbooth() {
    // 부스 선택
    const [selectedBooth, setSelectedBooth] = useState(null);
    
    const closeModal = () => {
    setSelectedBooth(null);
    };

    return (
      <>
      {/* selectedBooth에 부스 정보 들어있으면 모달창 띄움 */}
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
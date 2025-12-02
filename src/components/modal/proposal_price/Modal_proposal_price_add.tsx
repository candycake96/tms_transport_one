import React from "react";
import ReactModal from "react-modal";

interface MyModalProps {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
}


const Modal_proposal_price_add: React.FC<MyModalProps> = ({ show, title, children, onClose, onSave }) => {
  return (
    <ReactModal
      isOpen={show}                // เปิด/ปิด modal
      onRequestClose={onClose}     // ปิด modal เมื่อคลิกนอก modal หรือกด ESC
      contentLabel={title}         // ชื่อ modal สำหรับ accessibility
      className="modal-content"    // สามารถใส่ className เพื่อจัด style
      overlayClassName="modal-overlay"
    >
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
        <div className="modal-actions">
          {onSave && (
            <button onClick={onSave} className="btn-save">
              Save
            </button>
          )}
          <button onClick={onClose} className="btn-close">
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal_proposal_price_add;

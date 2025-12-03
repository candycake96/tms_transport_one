import React, { useState } from "react";
import ReactModal from "react-modal";
import 'bootstrap/dist/css/bootstrap.min.css';

// ตั้งค่า app element สำหรับ accessibility
ReactModal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal_Forgot_password: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ตัวอย่างการส่ง email
    setMessage(`ส่งลิงก์รีเซ็ตรหัสผ่านไปที่ ${email}`);
    setTimeout(() => setMessage(""), 3000);
    setEmail("");
  };

  return (
    <ReactModal
      isOpen={isOpen} 
      onRequestClose={onClose}
      className="modal-dialog"
      overlayClassName="modal-backdrop"
      contentLabel="ลืมรหัสผ่าน"
      closeTimeoutMS={200}
    >
      <div className="modal-content p-4">
        <h5 className="modal-title text-center mb-3">ลืมรหัสผ่าน</h5>
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              ส่งลิงก์รีเซ็ตรหัสผ่าน
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <button className="btn btn-secondary" onClick={onClose}>
            ปิด
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal_Forgot_password;

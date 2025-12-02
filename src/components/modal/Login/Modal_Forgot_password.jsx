import React, { useState } from "react";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// ตั้ง App Element
ReactModal.setAppElement("#root");

// ================== TYPES ==================
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message: string;
}

// =============== COMPONENT ===================
const Modal_Forgot_password: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post<ForgotPasswordResponse>(
        "http://localhost:3000/login",
        {
          email: email,
        } as ForgotPasswordRequest
      );

      setMessage(res.data.message || "ส่งคำขอสำเร็จ!");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "เกิดข้อผิดพลาด");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-dialog"
      overlayClassName="modal-backdrop"
      contentLabel="ลืมรหัสผ่าน"
    >
      <div className="modal-content p-4">
        <h5 className="modal-title mb-3">ลืมรหัสผ่าน</h5>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            ส่งลิงก์รีเซ็ตรหัสผ่าน
          </button>
        </form>

        <button className="btn btn-secondary mt-3" onClick={onClose}>
          ปิด
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal_Forgot_password;

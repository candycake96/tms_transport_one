import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token?: string; // ถ้า backend ส่ง token มา
}

const Login: React.FC = () => {
  const navigate = useNavigate(); // ✅ ต้องอยู่ภายใน component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const res = await axios.post<LoginResponse>(
        "http://localhost:3000/login",
        { email: email, password: password } as LoginRequest
      );

      // แสดงข้อความจาก backend
      setMessage(res.data.message || "เข้าสู่ระบบสำเร็จ! 🎉");

      // ถ้าได้ token เก็บไว้ใน localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      navigate('/pages');
    } catch (error: any) {
      setMessage(error.response?.data?.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ ❌");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <div className="card shadow-lg p-4 login-card">
        <h2 className="text-center text-primary mb-4">เข้าสู่ระบบ</h2>

        {message && <div className="alert alert-info text-center">{message}</div>}

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

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-end mt-1">
              <a href="#" className="text-primary">ลืมรหัสผ่าน?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="text-center mt-3">
          ยังไม่มีบัญชี? <a href="#" className="text-primary fw-semibold">สมัครสมาชิก</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

// ประกาศ type ของ props ที่ component จะรับ
interface AboutProps {
  userName?: string;    // ใส่ ? ถ้าไม่บังคับ
}

const About: React.FC<AboutProps> = ({ userName }) => {
  return (
    <>
      <div className="bg-light p-3">
        <p>test</p>
        <p>Hello: {userName}</p>
      </div>
    </>
  );
};

export default About;

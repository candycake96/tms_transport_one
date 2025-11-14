import React from "react";

type HomeProps = {
  userName?: string; // optional prop
};

const Home: React.FC<HomeProps> = ({ userName }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome  {userName ? userName : "Guest"}!</h1>
      <p>This is the Home page of TMS Transport system.</p>

      <div style={{ marginTop: "20px" }}>
        <p>Supakorn.M</p>
        {/* <MyButton label="Start New Transport" />
        <MyButton label="View Reports" /> */}
      </div>
    </div>
  );
};

export default Home;
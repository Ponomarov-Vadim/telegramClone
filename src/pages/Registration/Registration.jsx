import React from 'react';

const registration = () => {
    return (
        <div
      style={{
        display: "inline-block",
        width: "300px",
        position: "absolute",
        left: "35%",
        top: "30%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Messandger</span>
        <button>{"Next->"}</button>
      </div>
      <form
        style={{
          border: "1px solid black",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <label>Registration</label>
        <input type="email" placeholder="E-Mail" />
        <input type="text" placeholder="User name" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat password" />
      </form>
    </div>
    );
}

export default registration;

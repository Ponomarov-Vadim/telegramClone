import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
        <label>Singin</label>
        <input type="email" placeholder="E-Mail" />
        <input type="password" placeholder="Password" />
      </form>
      <div style={{ textAlign: "center" }}>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};

export default Login;

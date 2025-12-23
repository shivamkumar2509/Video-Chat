import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Video Call</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              // window.location.href="/q23qsc";
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#ff9839" }}>Connect </span>with your loved
            ones
          </h1>
          <p>Cover a distance by Video Call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile image" />
        </div>
      </div>
    </div>
  );
};

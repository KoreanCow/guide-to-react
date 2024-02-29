import React from "react";
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="LoadingContainer">
      <img className="DeliveryImage" src="/image/pizzaBoy.png" alt="pizza delivery" />
      <div className="LoadingTextContainer">
        <span className="LoadingText" style={{ color: "red" }}>결</span>
        <span className="LoadingText" style={{ color: "orange" }}>과</span>
        <span className="LoadingText" style={{ color: "yellow" }}>배</span>
        <span className="LoadingText" style={{ color: "green" }}>달</span>
        <span className="LoadingText" style={{ color: "blue" }}>중</span>
        <span className="LoadingText" style={{ color: "purple" }}>...</span>
      </div>
    </div>
  );
};

export default LoadingPage;

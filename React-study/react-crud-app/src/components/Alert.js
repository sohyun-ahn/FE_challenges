import "./Alert.css";
import React from "react";

export const AlertBox = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

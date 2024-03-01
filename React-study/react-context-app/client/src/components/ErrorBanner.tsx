import React from "react";
interface PropsType {
  message: string | null;
}
const ErrorBanner = ({ message }: PropsType) => {
  let errorMessage = message || "ERROR 발생";
  return (
    <div
      style={{
        padding: "0 5px",
        lineHeight: "35px",
        height: "35px",
        fontSize: "20px",
        backgroundColor: "red",
        color: "yellow",
      }}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorBanner;

import React from "react";
import PropTypes from "prop-types";

export default function Modal({ message, handleConfirmDelete }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => {
        handleConfirmDelete(false);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: "10px",
          padding: "50px",
        }}
      >
        <h2 style={{ color: "#c610d5" }}>{message}</h2>
        <footer style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              background: "#007bdd",
              color: "white",
              letterSpacing: "1px",
              fontWeight: "bolder",
              border: "none",
              padding: "8px",
              marginRight: "5px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleConfirmDelete(false);
            }}
          >
            Cancel
          </button>
          <button
            style={{
              background: "#950ba1",
              color: "white",
              letterSpacing: "1px",
              fontWeight: "bolder",
              border: "none",
              padding: "8px",
              marginLeft: "5px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleConfirmDelete(true);
            }}
          >
            Continue
          </button>
        </footer>
      </div>
    </div>
  );
}

Modal.PropType = {
  message: PropTypes.string,
  handleConfirmDelete: PropTypes.func,
};

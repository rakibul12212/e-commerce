import React, { useState, useEffect } from "react";

const Toast = ({
  message,
  type = "success",
  show,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  if (!show) return null;

  const toastTypes = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        toastTypes[type]
      } transition-all duration-300 transform ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold hover:opacity-75"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;

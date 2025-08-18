"use client";
import React, { useState } from "react";

const Suggestions = ({ isOpen, onClose }) => {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuggestion("");
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-[30vw] p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Any Suggestions ?</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded p-2 mb-4"
                      rows={4}
                      cols={56}
            placeholder="Enter your suggestion..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suggestions;

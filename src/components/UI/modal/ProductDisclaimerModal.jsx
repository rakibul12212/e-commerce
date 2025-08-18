import React from "react";

const data = [
  "Stock Availability Is Subject To Change. Please Confirm Availability Before Shopping By Calling Us.",
  "The Product Image Is For Illustration Purposes Only. The Actual Product May Vary In Size, Color, And Layout. No Claim Will Be Accepted For An Image Mismatch.",
  "Tech Land BD Can Change The Price Of Any Product At Any Moment Due To The Volatile Price Of The Technology.",
  "We Cannot Guarantee That The Information On This Page Is 100% Correct. Tech Land BD Is Not Responsible For The Results Obtained From The Use Of This Information."
];

const ProductDisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg  max-w-[30vw] p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Product Disclaimer</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {data.map((point, idx) => (
            <li key={idx} className="text-gray-700">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDisclaimerModal;
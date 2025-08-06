
import React from "react";

const Rating = ({
  value = 0,
  maxStars = 5,
  showValue = false,
  size = "medium",
  reviewCount = 0,
  showCount = false,
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-2xl";
      case "xl":
        return "text-3xl";
      default:
        return "text-lg";
    }
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      let starColor = "text-gray-300";

      if (i <= value) {
        starColor = "text-yellow-400";
      } else if (i - 0.5 <= value) {
        starColor = "text-yellow-400";
      }

      stars.push(
        <span
          key={i}
          className={`${starColor} ${getSizeClasses()} transition-colors duration-200`}
        >
          {i <= value ? "★" : i - 0.5 <= value ? "★" : "☆"}
        </span>,
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">{renderStars()}</div>

      {showValue && (
        <span className="text-sm font-medium text-gray-600">
          {value.toFixed(1)}
        </span>
      )}

      {showCount && reviewCount > 0 && (
        <span className="text-sm text-gray-500">
          ({reviewCount.toLocaleString()}{" "}
          {reviewCount === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  );
};

export default Rating;


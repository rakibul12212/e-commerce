

const ProgressBar = ({ progress, color }) => {
  return (
    <div className="w-full bg-gray-200 h-2 rounded-md">
      <div
        className={`${color} h-2 rounded-md`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;

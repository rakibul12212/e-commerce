export const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1920px] mx-auto px-2 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

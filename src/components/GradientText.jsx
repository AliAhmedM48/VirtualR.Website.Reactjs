export const GradientText = ({ children, className, ...props }) => {
  return (
    <span
      className={`bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

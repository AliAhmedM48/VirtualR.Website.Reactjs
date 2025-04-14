export const Button = ({ children, className, href, onClick, bg }) => {
  return (
    <button
      href={href ?? "#"}
      onClick={
        onClick ??
        (() => {
          console.log(`${children} button clicked`);
        })
      }
      className={
        "py-2 px-3 rounded-md cursor-pointer " +
        (bg
          ? "bg-gradient-to-r from-orange-500 to-orange-800 border-0 "
          : "border-[0.1px] hover:bg-gradient-to-r from-orange-500 to-orange-800 transition-all duration-1000") +
        className
      }
    >
      {children}
    </button>
  );
};

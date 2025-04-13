import clsx from "clsx";
import PropTypes from "prop-types";

export const MainTitle = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={clsx(
        className,
        "text-center text-3xl mb-8 sm:text-5xl lg:text-6xl tracking-wide"
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

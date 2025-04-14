import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

export const MainTitle = ({
  defaultText = "Default Title",
  hoverText = "Hovered Title",
  enableHover = true,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h2
      onMouseEnter={() => enableHover && setIsHovered(true)}
      onMouseLeave={() => enableHover && setIsHovered(false)}
      className={clsx(
        className,
        "text-center text-3xl mb-8 sm:text-5xl lg:text-6xl tracking-wide"
      )}
      {...props}
    >
      {enableHover && isHovered ? <>{hoverText}</> : <>{defaultText}</>}
    </h2>
  );
};

MainTitle.propTypes = {
  defaultText: PropTypes.node.isRequired,
  hoverText: PropTypes.node,
  enableHover: PropTypes.bool,
  className: PropTypes.string,
};

import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const Link = ({ page }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const _onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const _onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      Ir
    </a>
  );
}

export default Link;
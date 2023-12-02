import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const BlueCheck = () => {
  const hasCustomDomain = !window.location.hostname.includes("netlify.app");

  return (
    <span title="This site is verified">
      {hasCustomDomain && <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />}
    </span>
  );
};

export default BlueCheck;

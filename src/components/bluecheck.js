import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { window } from "browser-monads"
const BlueCheck = () => {
  const hasCustomDomain = !window.location.hostname.includes("netlify.app");

  return (
    <span title="This site is verified">
      {hasCustomDomain && <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />}
    </span>
  );
};

export default BlueCheck;

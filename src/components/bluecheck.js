import React, { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useLocation } from "@reach/router";

const BlueCheck = () => {
  const location = useLocation();

  // Check if location is defined and if its hostname includes "netlify.app"
  const hasNetlifyApp = location && location.hostname && location.hostname.includes("netlify.app");

  useEffect(() => {
    // You can perform additional logic or side effects based on the location here
    // This effect will run whenever the location changes
    if (location) {
      console.log("Current path:", location.pathname);
    }
  }, [location]);

  return (
    <span title="This site is verified">
      {!hasNetlifyApp ? (
        <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />
      ) : null}
    </span>
  );
};

export default BlueCheck;

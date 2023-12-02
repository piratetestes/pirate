import React, { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import useSiteMetadata from "../hooks/SiteMetadata";
import { useLocation } from "@reach/router";

const BlueCheck = () => {
  const { siteUrl } = useSiteMetadata();
  const location = useLocation();

  // Check if the hostname includes "netlify.app"
  const hasNetlifyApp = location.hostname.includes("netlify.app");

  useEffect(() => {
    // You can perform additional logic or side effects based on the location here
    // This effect will run whenever the location changes
    console.log("Current path:", location.pathname);
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

import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import useSiteMetadata from "../hooks/SiteMetadata";

const BlueCheck = () => {
  const { siteUrl } = useSiteMetadata();

  // Check if the hostname includes "netlify.app"
  const hasNetlifyApp = window.location.hostname.includes("netlify.app");

  return (
    <span title="This site is verified">
      {!hasNetlifyApp ? (
        <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />
      ) : null}
    </span>
  );
};

export default BlueCheck;

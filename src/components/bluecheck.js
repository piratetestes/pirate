import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BsFillPatchCheckFill } from "react-icons/bs";
import useSiteMetadata from '../hooks/SiteMetadata';

const BlueCheck = () => {
  const { siteUrl } = useSiteMetadata();

  // Check if the siteUrl contains "netlify.app"
  const hasCustomDomain = !siteUrl.includes("netlify.app");

  return (
    <span title="This site is verified">
      {hasCustomDomain ? (
        <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />
      ) : null}
    </span>
  );
};

export default BlueCheck;

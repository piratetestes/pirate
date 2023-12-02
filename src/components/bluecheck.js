import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BsFillPatchCheckFill } from "react-icons/bs";

const BlueCheck = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const hasCustomDomain = !data.site.siteMetadata.siteUrl.includes("netlify.app");

  return (
    <span title="This site is verified">
      {hasCustomDomain ? (
        <BsFillPatchCheckFill style={{ color: "#1D9BF0" }} />
      ) : null}
    </span>
  );
};

export default BlueCheck;

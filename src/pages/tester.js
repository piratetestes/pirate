import React from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';
const CustomBox = styled.div`


`

function Tester() {
  const { showNav } = useSiteMetadata()
  // const [loggedIn] = useState(false);
  


  return (

    <CustomBox>
<Layout>
<Helmet>

  
        <body id="body" className="social scroll" />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}


{/* {loggedIn ? (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED IN</div>
) : (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED OUT</div>
  )} */}


{/* <a style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} class="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/pirate&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="noreferrer">
Setup Account
</a> */}




</Layout>



      </CustomBox>
  );
}

export default Tester;



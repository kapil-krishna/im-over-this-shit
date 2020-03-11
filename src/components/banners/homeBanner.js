import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import { Icon } from "../icon";

export const HomeBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coding-pic-2.png" }) {
        childImageSharp {
          fluid (quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.file.childImageSharp.fluid;
  
  return (
    <BackgroundImage {...props} fluid={imageData}>
      <div className="bannerOutline">
        <div className="bannerContent">
          <Icon/>
          <h2>The markets leading software engineer transformation programme</h2>
          <h2>JavaSwitch your game up</h2>
        </div>
      </div>
      <div className="bannerButtons">
            <a className="applyNow" href="/apply">Apply Now</a>
            <a className="contact" href="/contact">Contact Us</a>
        </div>
    </BackgroundImage>
  )
};
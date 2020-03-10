import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

export const ApplyBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "apply-image.jpeg" }) {
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
        <div className="title">
            <h1>Apply</h1>
        </div>
    </BackgroundImage>
  )
};
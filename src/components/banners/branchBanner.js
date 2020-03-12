import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

export const BranchBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "locations-image3.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
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
            <h1>Branches</h1>
        </div>
    </BackgroundImage>
  )
};
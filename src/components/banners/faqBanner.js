import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

export const FaqBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "faq-pic.jpg" }) {
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
            <h1>F.A.Q.</h1>
        </div>
    </BackgroundImage>
  )
};
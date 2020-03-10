import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

export const CourseBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coding-pic-3.jpeg" }) {
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
            <h1>Course</h1>
        </div>
    </BackgroundImage>
  )
};
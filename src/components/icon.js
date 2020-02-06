import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Icon = () => {
  const data = useStaticQuery(graphql`
    query {
      jsIcon: file(relativePath: { eq: "javaswitch-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.jsIcon.childImageSharp.fluid} />
}

export default Icon;

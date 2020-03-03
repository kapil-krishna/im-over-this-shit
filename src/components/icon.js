import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const PureIcon = ({ data }) => (
    <Img fluid={data.file.childImageSharp.fluid} />
)

export const Icon = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "javaswitch-round4-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <PureIcon {...props} data={data} />
}

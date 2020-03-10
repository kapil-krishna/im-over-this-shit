import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import "./icon.scss";

export const PureIcon = ({ data }) => (
    <Link to="/">
      <Img fluid={data.file.childImageSharp.fluid} />
    </Link>
)

export const Icon = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "javaswitch-round4-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PureIcon className="logo-icon" {...props} data={data} />
  )
}

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./logoGrid.scss";

const LogoGrid = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "logos"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `);
    
    return ( 
        <div>   
            <div className="logoGrid">
                {data.allFile.edges.map(edge => 
                <div className="logoCard">
                  <Img fluid={edge.node.childImageSharp.fluid} />
                </div>
                )}
            </div>
        </div>
        )
    }

export default LogoGrid;
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./logoGrid.scss";

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px)`
};

const LogoGrid = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "logos"}}) {
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
                <Img fluid={edge.node.childImageSharp.fluid} />
                )}
            </div>
        </div>
        )
    }

export default LogoGrid;

// export const query = graphql`
//   query {
//     allImageSharp {
//       edges {
//         node {
//           id
//           fluid(maxWidth: 200, maxHeight: 200) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `
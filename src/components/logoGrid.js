import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px)`
};

const LogoGrid = () => {
    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
            edges {
                node {
                    id
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
    `);
    
    return ( 
        <div>
            <div style={imgGridStyle}>
                {data.allImageSharp.edges.map(edge => 
                <Img fluid={edge.node.fluid} />
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
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./testimonial.scss";

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "testimonials"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            title
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        html
                        }
                    }
                }
            }
        }
    `);
    
    return (  
        <div className="testimonials">
            {data.allFile.edges.map(edge => 
                <div className="testimonialCard">
                    <Img 
                        className="testimonialImage" 
                        fluid={edge.node.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.fluid} 
                        />
                    <div 
                        className="testimonialText"
                        dangerouslySetInnerHTML={{__html: edge.node.childMarkdownRemark.html}}>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Testimonials;
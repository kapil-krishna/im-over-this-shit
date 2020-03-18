import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialCard from "./testimonialCard";
import "./testimonial.scss";

export default function Testimonials() {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "testimonials"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        excerpt
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
                <TestimonialCard
                    fluid={edge.node.childMarkdownRemark.frontmatter.featuredImage.childImageSharp.fluid}
                    title={edge.node.childMarkdownRemark.frontmatter.title}
                    excerpt={edge.node.childMarkdownRemark.excerpt}
                    html={edge.node.childMarkdownRemark.html}
                    />
                )
            }
        </div>
    )
}